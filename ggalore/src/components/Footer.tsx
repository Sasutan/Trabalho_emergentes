import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="shadow-sm border-t-2 border-accent-gray mt-4">
      <div className="w-full p-4 md:py-8 px-5 md:max-w-7xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-primary-red"
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
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <span className="block text-sm sm:text-center text-gray-400 mt-10">
          © 2023
          <Link href="/" className="hover:underline font-tinos">
            GUNS GALORE™
          </Link>
          . All Rights Reserved.
        </span>
      </div>

      <div className="font-bold text-center text-[13vw] w-full leading-none h-min text-primary-red font-tinos">
        GUNS GALORE
      </div>
    </footer>
  );
}

export default Footer;
