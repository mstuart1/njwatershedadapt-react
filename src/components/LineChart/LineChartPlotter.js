import React from "react";
import { LineChart } from "./LineChart";
import { useData } from "./useData";

const width = window.innerWidth;
const height = window.innerHeight;

export const LineChartPlotter = () => {
  const data = useData();
  return data ? (
    <LineChart data={data} width={width} height={height} />
  ) : (
    <div>Loading ...</div>
  );
};
