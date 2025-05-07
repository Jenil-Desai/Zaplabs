"use server";

import {currentUser} from "@clerk/nextjs/server";
import {logger} from "@repo/logger";
import {db} from "@repo/db";
import {CreateZapSchema} from "@/schema/createZapSchema";

export async function createZap(data: CreateZapSchema) {
    const currentuser = await currentUser();

    if (!currentuser) {
        logger.error("[SERVER]: Unauthorized user trying to create zap");
        return {error: "Unauthorized user"};
    }

    try {
        const zapId = await db.$transaction(async tx => {

            const zap = await tx.zaps.create({
                data: {
                    name: data.name,
                    userId: currentuser.id,
                    triggerId: "",
                    action: {
                        create: data.actions.map((x) => ({
                            actionId: x.actionId,
                            sortingOrder: x.order
                        }))
                    }
                }
            })

            const trigger = await tx.triggers.create({
                data: {
                    triggerId: data.triggerId,
                    zapId: zap.id,
                }
            });

            await tx.zaps.update({
                where: {
                    id: zap.id
                },
                data: {
                    triggerId: trigger.id
                }
            })

            return zap.id;
        })

        return {success: "Zap created successfully", zapId};
    } catch (e) {
        logger.error("[SERVER]: Error creating zap", e);
        return {error: "Error creating zap"};
    }
}