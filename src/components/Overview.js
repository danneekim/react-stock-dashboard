import React from "react";
import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card>
      <span className="absolute left-4 top-4 text-neutral-500 text-lg xl:text-xl 2xl:text-2xl">
        {symbol}
      </span>
      <div className="w-full h-full flex items-center justify-around mt-4">
        <span className="text-2xl xl:text-3xl 2xl:text-4xl flex items-center px-2">
          ${price}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-500 m-2">
            {currency}
          </span>
        </span>

        <span
          className={`text-lg xl:text-xl 2xl:text-2xl ${
            change > 0 ? "text-lime-500" : "text-red-500"
          }`}
        >
          {change}
          <span>({changePercent}%)</span>
        </span>
      </div>
    </Card>
  );
};

export default Overview;
