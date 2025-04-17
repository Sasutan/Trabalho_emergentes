/*
  Warnings:

  - Added the required column `preco` to the `armas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoArma` to the `armas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "armas" ADD COLUMN     "preco" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "tipoArma" VARCHAR(20) NOT NULL;
