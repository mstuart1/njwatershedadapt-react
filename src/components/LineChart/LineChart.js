import React from "react";
import { scaleTime, extent, scaleLinear, max, line, tickFormat } from "d3";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";

const xValue = (d) => d.date;
const yValue = (d) => d.streamflowObs;

const margin = { top: 40, right: 40, bottom: 40, left: 100 };
const tickPadding = 10;

export const LineChart = ({ data, width, height }) => {
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth]);

  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0]);

  const lineGenerator = line()
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)));

  // const mostRecentDate = xScale.domain()[1];

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <XAxis
          xScale={xScale}
          innerHeight={innerHeight}
          tickPadding={tickPadding}
        />
        <YAxis
          yScale={yScale}
          innerWidth={innerWidth}
          tickPadding={tickPadding}
        />

        <path d={lineGenerator(data)} />
      </g>
    </svg>
  );
};
