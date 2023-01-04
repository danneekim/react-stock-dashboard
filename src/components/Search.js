import React, { useContext, useState } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./SearchResults";
import ThemeIcon from "./ThemeIcon";
import ThemeContext from "../context/ThemeContext";
import { searchStockSymbols } from "../api/stock-api";

const Search = () => {
  const { darkMode } = useContext(ThemeContext);

  const [input, setInput] = useState("");
  const [bestMatch, setBestMatches] = useState([]);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchStockSymbols(input);
        const result = searchResults.result.filter(
          (item) => !item.symbol.includes(".") && item.type === "Common Stock"
        );
        setBestMatches(result);
      }
    } catch (err) {
      setBestMatches([]);
      console.error(err);
    }
  };

  return (
    <div className="flex items-center">
      <div
        className={`flex items-center my-4 border-1  rounded-md relative z-50 w-96 ${
          darkMode
            ? "bg-gray-800 border-gray-800"
            : "bg-white border-neutral-200"
        }`}
      >
        <input
          type="text"
          value={input}
          className={`w-full px-4 py-2 focus:outline-none rounded-md ${
            darkMode ? "bg-gray-800" : null
          }`}
          placeholder="Search a ticker..."
          onChange={(event) => {
            setInput(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              updateBestMatches();
            }
          }}
        />

        {input && (
          <button onClick={clear} className="m-1">
            <XIcon className="h-4 w-4 fill-gray-500" />
          </button>
        )}

        <button
          onClick={updateBestMatches}
          className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-indigo-400"
        >
          <SearchIcon className="h-4 w-4 fill-gray-100" />
        </button>

        {input && bestMatch.length > 0 ? (
          <SearchResults results={bestMatch} />
        ) : null}
      </div>

      <ThemeIcon></ThemeIcon>
    </div>
  );
};

export default Search;
