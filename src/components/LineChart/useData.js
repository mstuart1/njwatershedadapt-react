import { useState, useEffect } from "react";
import { csv, timeParse } from "d3";

// must be a website, not local
const csvUrl =
  "https://gist.githubusercontent.com/mstuart1/5b220025beb870980cc648989ca82222/raw/cf9bd22bf41332125cbe2039c2a866faf68153d7/model_performance_streamflow";

const dateSpecifier = "%b-%Y";
const parseDay = timeParse(dateSpecifier);

const row = (d) => {
  d.date = parseDay(d.Date);
  d.streamflowObs = +d[`Streamflow Observed(cfs)`];
  d.streamflowSim = +d[`Streamflow Simulated(cfs)`];
  return d;
};

export const useData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
