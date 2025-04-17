/*
  Warnings:

  - You are about to drop the column `numDesparos` on the `armas` table. All the data in the column will be lost.
  - Added the required column `numDisparos` to the `armas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "armas" DROP COLUMN "numDesparos",
ADD COLUMN     "numDisparos" INTEGER NOT NULL;
