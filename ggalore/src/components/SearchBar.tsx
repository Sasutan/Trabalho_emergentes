import { ArmaItf } from "@/utils/types/ArmaItf";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  termo: string
}

type InputPesquisaProps = {
  setArmas: React.Dispatch<React.SetStateAction<ArmaItf[]>>
}


export function SearchBar({ setArmas }: InputPesquisaProps) {
  const { register, handleSubmit, reset, setFocus } = useForm<Inputs>()

  async function enviaPesquisa(data: Inputs) {
    if (data.termo.length < 2) {
      toast.error("A pesquisa deve ter no mínimo 2 caracteres")
      return
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/armas/pesquisa/${data.termo}`)
    const dados = await response.json()

    if (dados.length == 0) {
      toast.error("Nenhum resultado encontrado")
      setFocus("termo")
      reset({ termo: "" })
      return
    }

    setArmas(dados)
  }

  return (
    <form className="w-1/2 my-4" onSubmit={handleSubmit(enviaPesquisa)}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium sr-only text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm border rounded-sm bg-accent-gray border-gray-600 placeholder-gray-400 text-white"
          placeholder="Encontre o que busca..."
          {...register("termo", { required: true })}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-sm text-sm px-5 py-2 bg-primary-red hover:bg-primary-red focus:ring-primary-red"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
