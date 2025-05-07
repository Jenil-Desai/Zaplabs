import {currentUser} from "@clerk/nextjs/server";
import {logger} from "@repo/logger";
import {db} from "@repo/db";
import {NextResponse} from "next/server";

export async function GET() {
    const currentuser = await currentUser();

    if (!currentuser) return NextResponse.json({"error": "Unauthorized"}, {status: 401});

    try {
        const zaps = await db.zaps.findMany({
            where: {
                userId: currentuser.id,
            },
            select: {
                id: true,
                name: true,
                active: true,
                createdAt: true,
                updatedAt: true,
                _count: {
                    select: {
                        action: true,
                        zapRun: true,
                    },
                },
            },
        });

        const formattedZaps = zaps.map((zap) => ({
            id: zap.id,
            name: zap.name,
            active: zap.active,
            createdAt: zap.createdAt,
            updatedAt: zap.updatedAt,
            actionCount: zap._count.action,
            zapRunCount: zap._count.zapRun,
        }));

        return NextResponse.json(formattedZaps, {status: 200});
    } catch (e) {
        logger.error("[SERVER]: Error getting zaps:", e);
        return NextResponse.json({"error": "Internal Server Error"}, {status: 500});
    }
}