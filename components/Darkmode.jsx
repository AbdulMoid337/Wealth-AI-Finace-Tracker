"use client";
import React from 'react'
import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";
import { FaSun, FaMoon } from "react-icons/fa";

const Darkmode = () => {
    const { isDarkMode, toggle } = useDarkMode();

    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [isDarkMode]);
    
  return (
    <div className="z-10">
      <label
        className="relative inline-flex items-center cursor-pointer"
        aria-label="Toggle Dark Mode"
      >
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDarkMode}
          onChange={toggle}
        />
        <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-gray-700 transition-colors duration-300"></div>

        <div
          className={`absolute left-1 top-1 w-6 h-6 bg-white dark:bg-yellow-400 rounded-full shadow-md 
                      transform peer-checked:translate-x-6 transition-transform duration-300`}
        ></div>

        <FaMoon
          className={`absolute left-2 top-2 text-gray-500 dark:text-gray-200 transition-opacity duration-300 ${
            isDarkMode ? "opacity-100" : "opacity-0"
          }`}
          size={16}
        />
        <FaSun
          className={`absolute right-2 top-2 text-yellow-500 transition-opacity duration-300 ${
            isDarkMode ? "opacity-0" : "opacity-100"
          }`}
          size={16}
        />
      </label>
    </div>
  )
}

export default Darkmode