/*
  Warnings:

  - You are about to drop the column `sortingOrder` on the `Triggers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "sortingOrder" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Triggers" DROP COLUMN "sortingOrder";
