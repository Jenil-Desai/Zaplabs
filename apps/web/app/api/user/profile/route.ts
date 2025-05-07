import {currentUser} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";
import {logger} from "@repo/logger";
import {db} from "@repo/db";

export async function GET() {
    const currentuser = await currentUser();

    if (!currentuser) return NextResponse.json({"error": "Unauthorised"}, {status: 404});

    try {
        const userProfile = await db.user.findUnique({
            where: {
                clerkId: currentuser.id,
            },
            select: {
                name: true,
                email: true,
                createdAt: true,
            }
        })

        return NextResponse.json(userProfile, {status: 200});
    } catch (error) {
        logger.error("[SERVER]: Error getting user profile:", error);
        return NextResponse.json({"error": "Internal Server Error"}, {status: 500});
    }
}