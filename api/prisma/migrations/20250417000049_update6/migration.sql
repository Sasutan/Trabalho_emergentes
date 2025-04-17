/*
  Warnings:

  - The `tipoArma` column on the `armas` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "tipoArmas" AS ENUM ('PISTOLA', 'REVOLVER', 'ESPINGARDA', 'CARABINA', 'FUZIL');

-- AlterTable
ALTER TABLE "armas" DROP COLUMN "tipoArma",
ADD COLUMN     "tipoArma" "tipoArmas" NOT NULL DEFAULT 'PISTOLA';
