"use client";
import React from "react";

function Adicionar() {
  async function onsubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get("nome"),
      calibre: formData.get("calibre"),
      preco: Number(formData.get("preco")),
      numDisparos: Number(formData.get("numDisparos")),
      fabricanteId: Number(formData.get("fabricanteId")),
      foto: formData.get("foto"),
      tipoArma: formData.get("tipoArma"),
    };

    try {
      const response = await fetch("http://localhost:3001/armas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erro ao cadastrar");

      alert("Produto cadastrado com sucesso!");
    } catch (err) {
      alert("Falha ao cadastrar");
      console.error(err);
    }
  }

  return (
    <main className="md:max-x-7wl mx-auto px-6 my-12 mb-20 text-white">
      <h1 className="text-white text-5xl font-tinos px-5 text-center md:max-w-7xl mx-auto">
        Adicionar Produtos
      </h1>
      <form
        className="max-w-1/2 mx-auto grid grid-cols-2 mt-12 gap-5 items-end"
        onSubmit={onsubmit}
      >
        <div>
          <label htmlFor="nome" className="block mb-2 text-sm font-medium ">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
            required
          />
        </div>

        <div>
          <label htmlFor="calibre" className="block mb-2 text-sm font-medium ">
            Calibre
          </label>
          <input
            type="text"
            name="calibre"
            id="calibre"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
            required
          />
        </div>

        <div>
          <label htmlFor="preco" className="block mb-2 text-sm font-medium ">
            Preço
          </label>
          <input
            type="number"
            name="preco"
            id="preco"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
            required
          />
        </div>

        <div>
          <label
            htmlFor="numDisparos"
            className="block mb-2 text-sm font-medium "
          >
            Número de Disparos
          </label>
          <input
            type="number"
            name="numDisparos"
            id="numDisparos"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
            required
          />
        </div>

        <div>
          <label
            htmlFor="fabricanteId"
            className="block mb-2 text-sm font-medium "
          >
            Fabricante ID
          </label>
          <input
            type="number"
            name="fabricanteId"
            id="fabricanteId"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
            required
          />
        </div>

        <div>
          <label htmlFor="foto" className="block mb-2 text-sm font-medium ">
            URL da Foto
          </label>
          <input
            type="text"
            name="foto"
            id="foto"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
            required
          />
        </div>

        <div>
          <label htmlFor="tipoArma" className="block mb-2 text-sm font-medium ">
            Tipo de Arma
          </label>
          <select
            name="tipoArma"
            id="tipoArma"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
            required
          >
            <option value="">Selecione</option>
            <option value="PISTOLA">Pistola</option>
            <option value="REVOLVER">Revólver</option>
            <option value="ESPINGARDA">Espingarda</option>
            <option value="CARABINA">Carabina</option>
            <option value="FUZIL">Fuzil</option>
          </select>
        </div>

        <button
          type="submit"
          className=" w-fit h-fit ml-auto bg-primary-red hover:bg-primary-red/90 font-medium rounded-sm text-sm px-5 py-2.5 text-center"
        >
          Cadastrar Produto
        </button>
      </form>
    </main>
  );
}

export default Adicionar;
