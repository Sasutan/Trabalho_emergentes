import CardProduto from "@/components/CardProduto";
import Estrela from "@/components/Estrela";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductPage() {
  return (
    <main className="mx-auto md:max-w-7xl px-6">
      <section className="py-8  md:py-16 antialiased">
        <div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="w-full">
              <Image
                width={220}
                height={220}
                className="w-full rounded-sm"
                src="https://cdn.awsli.com.br/600x1000/2595/2595879/produto/221669979/product-138-phot-ykvo19ialv.jpg"
                alt=""
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <div className="flex justify-between">
                <span className="text-primary-red underline font-tinos font-semibold mb-2 uppercase">
                  Revolver
                </span>
                <span className="text-primary-red underline font-semibold  ml-auto w-fit uppercase">
                  .38 SPL
                </span>
              </div>
              <h1 className="text-xl font-semibold text-white sm:text-2xl">
                .38 Nariz Curto
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-white sm:text-3xl ">
                  R$599.99
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
                    className="text-sm font-medium leading-none text-white underline hover:no-underline "
                  >
                    345 Reviews
                  </a>
                </div>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <Link
                  href="#"
                  title=""
                  className="flex items-center justify-center py-2.5 px-5 text-base font-semibold text-white  bg-primary-red rounded-sm   hover:text-primary-700   "
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

                {/* <a
                  href="#"
                  title=""
                  className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5  flex items-center justify-center"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to cart
                </a> */}
              </div>

              <hr className="my-6 md:my-8 border-gray-200 " />

              <p className="mb-6 text-text-gray text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati nesciunt reprehenderit expedita amet! Vero maiores
                eveniet ab autem commodi quod est earum maxime, ea, ipsum quas
                aliquam aperiam, nam ex sapiente? Iusto consequuntur nemo
                eveniet vel dolor porro, quidem, eos perferendis dicta iste
                facilis ipsum nihil eaque minima aliquid non?
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, accusamus labore aliquid odit eos nobis alias animi
                placeat nostrum consectetur expedita necessitatibus tempora at,
                reprehenderit assumenda facere debitis nemo minima quia corporis
                ipsum neque consequuntur praesentium. Officia adipisci in
                commodi dolores, labore, voluptas quam expedita sunt id ut
                possimus rerum!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
