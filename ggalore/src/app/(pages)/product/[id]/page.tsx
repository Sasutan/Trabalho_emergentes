'use client';
import Estrela from "@/components/Estrela";
import Image from "next/image";
import { useParams } from "next/navigation"
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { ArmaItf } from "@/utils/types/ArmaItf";
import { useClienteStore } from "@/context/ClienteContext";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  observacoes: string
}

export default function ProductPage() {
  const params = useParams()

  const [arma, setArma] = useState<ArmaItf>()
  const { cliente } = useClienteStore()

  const { register, handleSubmit, reset } = useForm<Inputs>()

  useEffect(() => {
    async function buscaDados() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/armas/${params.id}`)
      const dados = await res.json()
      // console.log(dados)
      setArma(dados)
      
    }
    buscaDados()
    
  }, [])
 
 async function enviaTestes(data: Inputs) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/testes`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        clienteId: String(cliente.id), // send as string
        armaId: Number(params.id),
        observacoes: data.observacoes // correct field name
      })
    })

    if (response.status == 201) {
      toast.success("Obrigado. Sua proposta foi enviada. Aguarde retorno")
      reset()
    } else {
      toast.error("Erro... Não foi possível enviar sua proposta")
    }
  }


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
                src={arma?.foto || ""}
                alt={arma?.nome || ""}
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <div className="flex justify-between">
                <span className="text-primary-red underline font-tinos font-semibold mb-2 uppercase">
                  {arma?.tipoArma}
                </span>
                <span className="text-primary-red underline font-semibold ml-auto w-fit uppercase">
                  {arma?.calibre}
                </span>
              </div>

              <h1 className="text-xl font-semibold text-white sm:text-2xl">
                {arma?.nome}
              </h1>

              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-white sm:text-3xl">
                  R${arma?.preco}
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

{cliente.id ?
                <>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Marque um teste aqui</h3>
                  <form onSubmit={handleSubmit(enviaTestes)}>
                    <input type="text" className="mb-2 mt-4 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={`${cliente.nome} (${cliente.email})`} disabled readOnly />
                    <textarea id="message" className="mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Onde Deseja marcar o teste? Alguma observação?"
                      required
                      {...register("observacoes")}></textarea>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Marcar Teste</button>
                  </form>
                </>
                :
                <h2 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
                  Faça login para marcar um teste
                </h2>
              }
  

              <hr className="my-6 md:my-8 border-gray-200" />

              <p className="mb-6 text-text-gray text-lg">
                Número de disparos: {arma?.numDisparos}
                <br />
                Fabricante ID: {arma?.fabricanteId}
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

