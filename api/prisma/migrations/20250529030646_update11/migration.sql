/*
  Warnings:

  - The primary key for the `clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "testes" DROP CONSTRAINT "testes_clienteId_fkey";

-- AlterTable
ALTER TABLE "clientes" DROP CONSTRAINT "clientes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "clientes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "clientes_id_seq";

-- AlterTable
ALTER TABLE "testes" ALTER COLUMN "clienteId" SET DATA TYPE VARCHAR(80);

-- AddForeignKey
ALTER TABLE "testes" ADD CONSTRAINT "testes_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
