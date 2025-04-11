import CardProduto from "@/components/CardProduto";
import Filtro from "@/components/Filtro";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="my-12">
      <h1 className="text-white text-5xl font-tinos px-5 md:max-w-7xl mx-auto">
        Veja Nossos Produtos
      </h1>
      <div className="flex justify-between items-center mt-10 px-5 md:max-w-7xl mx-auto">
        <Filtro />
        <SearchBar />
      </div>

      {/* <!-- MAIN LISTING --> */}
      <ul className="px-5 md:max-w-7xl mx-auto my-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />

        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </ul>
    </main>
  );
}
