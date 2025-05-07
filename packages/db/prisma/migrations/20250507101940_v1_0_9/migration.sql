/*
  Warnings:

  - Added the required column `userId` to the `Zaps` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Zaps" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Zaps" ADD CONSTRAINT "Zaps_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
