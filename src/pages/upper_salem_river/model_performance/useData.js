import { useState, useEffect } from "react";
import { csv } from "d3";
import streamflowDat from "./model_perf-streamflow.csv";

export const useData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const row = (d) => {
      d[`Simulated Streamflow(cfs)`] = +d[`Simulated Streamflow(cfs)`];
      d[`Observed Streamflow(cfs)`] = +d[`Observed Streamflow(cfs)`];
      d.Date = new Date(d.Date);
      return d;
    };
    csv(streamflowDat, row).then((data) => {
      console.log(data[0]);
      setData(data);
    });
  }, []);
  return data;
};
