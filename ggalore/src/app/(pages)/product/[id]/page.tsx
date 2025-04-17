import Estrela from "@/components/Estrela";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Arma {
  id: number;
  nome: string;
  calibre: string;
  preco: number;
  numDisparos: number;
  fabricanteId: number;
  foto: string;
  tipoArma: string;
}

interface ArmaPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ArmaPageProps) {
  const res = await fetch(`http://localhost:3001/armas/${params.id}`);

  if (!res.ok) {
    return (
      <main className="mx-auto md:max-w-7xl px-6">
        <h1 className="text-white text-2xl mt-10">Produto não encontrado</h1>
      </main>
    );
  }

  const arma: Arma = await res.json();

  return (
    <main className="mx-auto md:max-w-7xl px-6">
      <section className="py-8 md:py-16 antialiased">
        <div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="w-full">
              <Image
                width={500}
                height={500}
                className="w-full rounded-sm"
                src={arma.foto}
                alt={arma.nome}
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <div className="flex justify-between">
                <span className="text-primary-red underline font-tinos font-semibold mb-2 uppercase">
                  {arma.tipoArma}
                </span>
                <span className="text-primary-red underline font-semibold ml-auto w-fit uppercase">
                  {arma.calibre}
                </span>
              </div>

              <h1 className="text-xl font-semibold text-white sm:text-2xl">
                {arma.nome}
              </h1>

              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-white sm:text-3xl">
                  R${arma.preco.toFixed(2)}
                </p>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    <Estrela />
                    <Estrela />
                    <Estrela />
                    <Estrela />
                    <Estrela ativada={false} />
                  </div>
                  <p className="text-sm font-medium leading-none text-white">
                    (5.0)
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium leading-none text-white underline hover:no-underline"
                  >
                    345 Reviews
                  </a>
                </div>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <Link
                  href="#"
                  className="flex items-center justify-center py-2.5 px-5 text-base font-semibold text-white bg-primary-red rounded-sm"
                  role="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  Agendar Teste
                </Link>
              </div>

              <hr className="my-6 md:my-8 border-gray-200" />

              <p className="mb-6 text-text-gray text-lg">
                Número de disparos: {arma.numDisparos}
                <br />
                Fabricante ID: {arma.fabricanteId}
                <br />
                Produto de alta qualidade, ideal para colecionadores ou
                profissionais de segurança.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
