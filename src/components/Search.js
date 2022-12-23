import React, { useState } from "react";
import { mockSearchResults } from "../constants/mock";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./SearchResults";

const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatch, setBestMatches] = useState(mockSearchResults.result);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = () => {
    setBestMatches(mockSearchResults.result);
  };

  return (
    <div className="flex items-center my-4 border-2 rounded-md ring-black ring-1 relative z-50 w-96">
      <input
        type="text"
        value={input}
        className="w-full px-4 py-2 focus:outline-none rounded-md"
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
      {/* Clear */}
      {input && (
        <button onClick={clear} className="m-1">
          <XIcon className="h-4 w-4 fill-gray-500" />
        </button>
      )}
      {/* Search */}
      <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2"
      >
        <SearchIcon className="h-4 w-4 fill-gray-100" />
      </button>
      {/* Search Results */}
      {input && bestMatch.length > 0 ? (
        <SearchResults results={bestMatch} />
      ) : null}
    </div>
  );
};

export default Search;
