import React from "react";
import { MoonIcon } from "@heroicons/react/solid";

const ThemeIcon = () => {
  return (
    <button className="rounded-lg border-1 p-2 shadow-lg absolute right-10">
      <MoonIcon className="h-5 w-5 cursor-pointer stroke-1 stroke-neutral-600 fill-none" />
    </button>
  );
};

export default ThemeIcon;
