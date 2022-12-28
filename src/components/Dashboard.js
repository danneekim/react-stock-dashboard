import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "./Chart";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchStockDetails } from "../api/stock-api";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        console.log("details: ", result);
        setStockDetails(result);
      } catch (err) {
        setStockDetails({});
        console.log(err);
      }
    };
    updateStockDetails();
  }, [stockSymbol]);

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
      grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr 
      gap-6 p-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={stockDetails.name}></Header>
      </div>
      <div className="md:col-span-2 row-span-4">
        <Chart></Chart>
      </div>
      <div>
        <Overview
          symbol={stockDetails.ticker}
          price={300}
          change={30}
          changePercent={10.0}
          currency={"USD"}
        ></Overview>
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={stockDetails} />
      </div>
    </div>
  );
};

export default Dashboard;
