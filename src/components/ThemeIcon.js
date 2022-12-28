import React, { useContext } from "react";
import { MoonIcon } from "@heroicons/react/solid";
import ThemeContext from "../context/ThemeContext";

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button
      className={`rounded-lg border-1 p-2 shadow-lg absolute right-10 ${
        darkMode ? "shadow-gray-800 border-indigo-300" : null
      } transition duration-300 hover:scale-110 hover:ring-2 ring-indigo-400`}
      onClick={toggleDarkMode}
    >
      <MoonIcon
        className={`h-5 w-5 cursor-pointer stroke-1 fill-none ${
          darkMode
            ? "fill-yellow-400 stroke-yellow-400"
            : "fill-none stroke-neutral-400"
        }`}
      />
    </button>
  );
};

export default ThemeIcon;
