import Link from "next/link";
import React from "react";
import MobileHeaderMenu from "./MobileHeaderMenu";

function Header2() {
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

        <MobileHeaderMenu />
      </nav>
    </header>
  );
}

export default Header2;
