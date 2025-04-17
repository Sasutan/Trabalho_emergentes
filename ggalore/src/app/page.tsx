'use client'
import CardProduto from "@/components/CardProduto";
import Filtro from "@/components/Filtro";
import SearchBar from "@/components/SearchBar";
import { ArmaItf } from "@/utils/types/ArmaItf";
import { useEffect, useState } from "react";

export default function Home() {
  const [armas, setArmas] = useState<ArmaItf[]>([])


  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/armas`)
      const dados = await response.json()
 
      setArmas(dados)
    }
    buscaDados()
  }, [])

  const listaArmas = armas.map( arma => (
    <CardProduto data={arma} key={arma.id} />
  ))


  return (
    <main className="my-12">
      <h1 className="text-white text-5xl font-tinos px-5 md:max-w-7xl mx-auto">
        Veja Nossos Produtos
      </h1>
      <div className="flex justify-between items-center mt-10 px-5 md:max-w-7xl mx-auto">
        <Filtro />
        <SearchBar setArmas={setArmas} />
      </div>

      {/* <!-- MAIN LISTING --> */}
      <ul className="px-5 md:max-w-7xl mx-auto my-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {listaArmas}
      </ul>
    </main>
  );
}
