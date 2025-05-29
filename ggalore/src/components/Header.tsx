"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ListPlus, KeyRound, LogOut } from "lucide-react";
import { useClienteStore } from "@/context/ClienteContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const { cliente, deslogaCliente } = useClienteStore();
  const router = useRouter();

  function clienteSair() {
    if (confirm("Confirma saída do sistema?")) {
      deslogaCliente();
      if (typeof window !== "undefined" && localStorage.getItem("clienteKey")) {
        localStorage.removeItem("clienteKey");
      }
      router.push("/login");
    }
  }

  return (
    <header className="mb-4 border-b-2 border-accent-gray py-2 bg-background-gray">
      <nav className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse text-primary-red"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-target-icon lucide-target"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-tinos">
            GUNS GALORE
          </span>
        </Link>

        {/* Botão do menu mobile */}
        <button
          onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-sm md:hidden  text-text-gray hover:bg-accent-gray "
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu links */}
        <div
          className={`w-full ${!isMobileMenuOpen && "max-md:hidden"} md:block md:w-auto`}
          id="navbar-default"
        >
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-sm md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 border-text-gray items-center">

            {cliente.id ? (
              <>
                <span className="text-white font-bold px-2">{cliente.nome}</span>
                            <Link
              href="/adicionar"
              className="block py-2 px-3 rounded-sm bg-background-gray md:border-0 text-white md:hover:text-primary-red hover:bg-text-gray w-fit hover:text-accent-gray md:hover:bg-transparent"
            >
              <ListPlus />
            </Link>
                <Link
                  href="/testes"
                  className="text-white font-bold bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-400 rounded-lg text-sm w-full sm:w-auto px-3 py-2 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  Meus Testes
                </Link>
                <span
                  className="cursor-pointer font-bold text-gray-600 px-2"
                  onClick={clienteSair}
                >
                  <LogOut />
                </span>
              </>
            ) : (

              <Link
                href="/login"
                className="block py-2 px-3 rounded-sm bg-background-gray md:border-0 text-white md:hover:text-primary-red hover:bg-text-gray w-fit hover:text-accent-gray md:hover:bg-transparent"
              >
                <KeyRound />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}