'use client'
import { useEffect, useState } from "react";
import { useClienteStore } from "@/context/ClienteContext";
import { TestesItf } from "@/utils/types/TestesItf";

export default function Testes() {
  const [testes, setTestes] = useState<TestesItf[]>([])
  const { cliente } = useClienteStore()

  useEffect(() => {
    if (!cliente.id) return;
    async function buscaDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/testes/${cliente.id}`)
      const dados = await response.json()
      setTestes(Array.isArray(dados) ? dados : [])
    }
    buscaDados()
  }, [cliente.id])

  // para retornar apenas a data do campo no banco de dados
  // 2024-10-10T22:46:27.227Z => 10/10/2024
  function dataDMA(data: string) {
    const ano = data.substring(0, 4)
    const mes = data.substring(5, 7)
    const dia = data.substring(8, 10)
    return dia + "/" + mes + "/" + ano
  }

  const testesTable = testes.map(teste => (
    <tr key={teste.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <p><b>{teste.arma.nome} {teste.arma.calibre}</b></p>
        <p className='mt-3'>Tipo: {teste.arma.tipoArma} -
          R$: {Number(teste.arma.preco).toLocaleString("pt-br", { minimumFractionDigits: 2 })}</p>
      </th>
      <td className="px-6 py-4">
        <img src={teste.arma.foto} className="fotoArma" alt="Foto Arma" />
      </td>
      <td className="px-6 py-4">
        <p><b>{teste.observacoes}</b></p>
        <p><i>Marcado em: {dataDMA(teste.createdAt)}</i></p>
      </td>
      <td className="px-6 py-4">
        {teste.resultado ?
          <>
            <p><b>{teste.resultado}</b></p>
            <p><i>Concluido em: {dataDMA(teste.updatedAt as string)}</i></p>
          </>
          :
          <i>Aguardando...</i>}
      </td>
    </tr>
  ))

  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="mb-6 mt-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
        Listagem dos <span className="underline underline-offset-3 decoration-8 decoration-red-400 dark:decoration-red-600">Meus Testes</span></h1>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Arma
            </th>
            <th scope="col" className="px-6 py-3">
              Foto
            </th>
            <th scope="col" className="px-6 py-3">
              Teste
            </th>
            <th scope="col" className="px-6 py-3">
              Data
            </th>
          </tr>
        </thead>
        <tbody>
          {testesTable}
        </tbody>
      </table>
    </section>
  )
}