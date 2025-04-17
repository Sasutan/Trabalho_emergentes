"use client";

import { ListPlus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function MobileHeaderMenu() {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        data-collapse-toggle="navbar-default"
        onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-sm md:hidden  text-text-gray hover:bg-accent-gray "
        aria-controls="navbar-default"
        aria-expanded="false"
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
      <div
        className={`w-full ${
          !isMobileMenuOpen && "max-md:hidden"
        }  md:block md:w-auto`}
        id="navbar-default"
      >
        <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-sm md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-accent-gray border-text-gray">
          <Link
            href="/adicionar"
            className="block py-2 px-3 rounded-sm bg-background-gray md:border-0 text-white md:hover:text-primary-red hover:bg-text-gray w-fit hover:text-accent-gray md:hover:bg-transparent"
          >
            <ListPlus />
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileHeaderMenu;
