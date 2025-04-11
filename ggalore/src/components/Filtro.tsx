"use client";

import React, { useState } from "react";

function Filtro() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        id="dropdownCheckboxButton"
        data-dropdown-toggle="dropdownDefaultCheckbox"
        className="text-white bg-primary-red -red  font-medium rounded-sm mb-2 text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Dropdown checkbox
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownDefaultCheckbox"
        className={`z-10 w-48 bg-accent-gray ${
          !isOpen && "hidden"
        } absolute divide-y rounded-sm shadow-sm divide-gray-600`}
      >
        <ul
          className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownCheckboxButton"
        >
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-1"
                type="checkbox"
                value=""
                className="w-4 h-4 text-primary-red bg-gray-100 border-gray-300 rounded-sm"
              />
              <label
                htmlFor="checkbox-item-1"
                className="ms-2 text-sm font-medium text-text-gray"
              >
                Revolver
              </label>
            </div>
          </li>

          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-1"
                type="checkbox"
                value=""
                className="w-4 h-4 text-primary-red bg-gray-100 border-gray-300 rounded-sm"
              />
              <label
                htmlFor="checkbox-item-1"
                className="ms-2 text-sm font-medium text-text-gray"
              >
                Pistola
              </label>
            </div>
          </li>

          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-1"
                type="checkbox"
                value=""
                className="w-4 h-4 text-primary-red bg-gray-100 border-gray-300 rounded-sm"
              />
              <label
                htmlFor="checkbox-item-1"
                className="ms-2 text-sm font-medium text-text-gray"
              >
                Fuzil
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filtro;
