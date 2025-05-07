import {currentUser} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";
import {logger} from "@repo/logger";
import {db} from "@repo/db";

export async function GET() {
    const currentuser = await currentUser();

    if (!currentuser) return NextResponse.json({error: "Unauthorized"}, {status: 401});

    try {
        const availableTriggers = await db.availableTriggers.findMany({
            where: {},
            select: {
                id: true,
                name: true
            }
        });

        return NextResponse.json(availableTriggers, {status: 200});
    } catch (e) {
        logger.error("[SERVER]: Error getting available triggers:", e);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}