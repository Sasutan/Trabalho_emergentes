/*
  Warnings:

  - The primary key for the `clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `clientes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `clienteId` on the `testes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "testes" DROP CONSTRAINT "testes_clienteId_fkey";

-- AlterTable
ALTER TABLE "clientes" DROP CONSTRAINT "clientes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "clientes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "testes" DROP COLUMN "clienteId",
ADD COLUMN     "clienteId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "testes" ADD CONSTRAINT "testes_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
