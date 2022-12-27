import React, { useState } from "react";
import Card from "./Card";
import { mockHistoricalData } from "../constants/mock";
import { convertUnixTimeStampToDate } from "../helpers/date-helper";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  const [data, setDate] = useState(mockHistoricalData);
  const [filter, setFilter] = useState("1W");

  const formatData = () => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimeStampToDate(data.t[index]),
      };
    });
  };

  return (
    <Card>
      <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
          <Area
            dataKey="value"
            type="monotone"
            stroke="#312e81"
            strokeWidth={0.5}
            fillOpacity={1}
          />
          <Tooltip />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
