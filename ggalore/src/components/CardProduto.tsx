import Image from "next/image";
import Link from "next/link";
import React from "react";
import Estrela from "./Estrela";
import { ArmaItf } from "@/utils/types/ArmaItf";

export function CardProduto({ data }: { data: ArmaItf }) {
  return (
    <li className="w-full max-w-sm border border-gray-200 rounded-sm shadow-sm bg-accent-gray p-5">
      <Link href={`/product/${data.id}`}>
        <p className="text-primary-red underline font-tinos font-semibold mb-2 uppercase">
          {data.tipoArma}
        </p>

        <div className="w-full aspect-square object-cover bg-white flex items-center justify-center">
          <Image
            className="rounded-sm w-5/6"
            src={data.foto}
            width={220}
            height={220}
            alt="product image"
          />
        </div>

        <div className="mt-2">
          <p className="text-primary-red underline font-semibold text-sm ml-auto w-fit uppercase">
            {data.calibre}
          </p>
          <Link href="/">
            <h5 className="text-xl font-semibold tracking-tight text-white">
              {data.nome}
            </h5>
          </Link>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <Estrela />
              <Estrela />
              <Estrela />
              <Estrela />
              <Estrela ativada={false} />
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-sm bg-white text-accent-gray ms-3">
              4.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-white">
              R${data.preco}
            </span>
            <a
              href="#"
              className="text-white focus:ring-4 focus:outline-none font-medium rounded-sm text-sm px-5 py-2.5 text-center bg-primary-red hover:bg-primary-red focus:ring-primary-red"
            >
              Saber Mais
            </a>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CardProduto;
