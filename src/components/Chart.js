import React, { useContext, useState, useEffect } from "react";
import Card from "./Card";
import ChartFilter from "./ChartFilter";
import { mockHistoricalData } from "../constants/mock";
import {
  convertUnixTimeStampToDate,
  convertDateToUnixTimeStamp,
  createDate,
} from "../helpers/date-helper";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartConfig } from "../constants/config";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";

const Chart = () => {
  const [chartData, setChartData] = useState(mockHistoricalData);
  const [filter, setFilter] = useState("1W");

  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];

      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);
      console.log(startDate, "....", endDate);

      const unixStartTimeStamp = convertDateToUnixTimeStamp(startDate);
      const unixEndTimeStamp = convertDateToUnixTimeStamp(endDate);
      console.log(unixStartTimeStamp, unixEndTimeStamp);

      return [unixStartTimeStamp, unixEndTimeStamp];
    };

    getDateRange();
  }, [stockSymbol, filter]);

  const formatData = () => {
    return chartData.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimeStampToDate(chartData.t[index]),
      };
    });
  };

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-50">
        {Object.keys(chartConfig).map((item) => {
          return (
            <li key={item}>
              <ChartFilter
                text={item}
                active={filter === item}
                onClick={() => {
                  setFilter(item);
                }}
              ></ChartFilter>
            </li>
          );
        })}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={formatData(chartData)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#312e81" : "rgb(199,210,254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#312e81" : "rgb(199,210,254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="value"
            type="monotone"
            stroke="#312e81"
            strokeWidth={0.5}
            fillOpacity={1}
            fill="url(#chartColor)"
          />
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
          />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
