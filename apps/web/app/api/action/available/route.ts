import {currentUser} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";
import {logger} from "@repo/logger";
import {db} from "@repo/db";

export async function GET() {
    const currentuser = await currentUser();

    if (!currentuser) return NextResponse.json({error: "Unauthorized"}, {status: 401});

    try {
        const availableAction = await db.availableAction.findMany({
            where: {},
            select: {
                id: true,
                name: true
            }
        });

        return NextResponse.json(availableAction, {status: 200});
    } catch (e) {
        logger.error("[SERVER]: Error getting available action:", e);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}