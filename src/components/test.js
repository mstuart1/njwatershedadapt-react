import React, { useState, useEffect } from "react";
import { csv, scaleBand, scaleLinear, max, timeParse } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/mstuart1/5b220025beb870980cc648989ca82222/raw/model_performance_streamflow";

const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 200 };

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

// console.log(`This is working!`);

const dateSpecifier = "%b-%Y";
const parseDay = timeParse(dateSpecifier);

export const Test = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const row = (d) => {
      d.streamflowSim = +d[`Simulated Streamflow(cfs)`];
      d.streamflowObs = +d[`Observed Streamflow(cfs)`];
      d.Date = parseDay(d.Date);
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);

  if (!data) {
    return <pre>{"Loading..."}</pre>;
  }

  //   console.log(data);

  const yScale = scaleBand()
    .domain(data.map((d) => d.streamflowObs))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Date)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {xScale.ticks().map((tickValue) => (
          <g transform={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight} stroke="black" />
            <text
              dy=".71em"
              y={innerHeight + 3}
              style={{ textAnchor: "middle" }}
            >
              {tickValue}
            </text>
          </g>
        ))}
        {yScale.domain().map((tickValue) => (
          <text
            style={{ textAnchor: "end" }}
            dy=".32em"
            x={-3}
            y={yScale(tickValue) + yScale.bandwidth() / 2}
          >
            {tickValue}
          </text>
        ))}
        {data.map((d) => (
          <rect
            x={0}
            y={yScale(d.Date)}
            width={xScale(d.streamflowObs)}
            height={yScale.bandwidth()}
          />
        ))}
      </g>
    </svg>
  );
};
