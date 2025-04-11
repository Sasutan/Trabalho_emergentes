-- CreateTable
CREATE TABLE "armas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(80) NOT NULL,
    "calibre" VARCHAR(20) NOT NULL,
    "numDesparos" INTEGER NOT NULL,
    "fabricanteId" INTEGER NOT NULL,

    CONSTRAINT "armas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fabricantes" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(80) NOT NULL,
    "paisOrigem" VARCHAR(80) NOT NULL,
    "anoFundacao" INTEGER NOT NULL,
    "tipo" VARCHAR(20) NOT NULL,

    CONSTRAINT "fabricantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(80) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "licencaEsp" VARCHAR(20) NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testes" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "resultado" VARCHAR(20) NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "armaId" INTEGER NOT NULL,

    CONSTRAINT "testes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "armas" ADD CONSTRAINT "armas_fabricanteId_fkey" FOREIGN KEY ("fabricanteId") REFERENCES "fabricantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testes" ADD CONSTRAINT "testes_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testes" ADD CONSTRAINT "testes_armaId_fkey" FOREIGN KEY ("armaId") REFERENCES "armas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
