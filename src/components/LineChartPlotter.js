import React, { useState, useEffect, useRef } from "react";
import {
  csv,
  timeParse,
  scaleTime,
  extent,
  scaleLinear,
  max,
  line,
  axisBottom,
  select,
  axisLeft,
} from "d3";

// const width = window.innerWidth;
const width = 750;
// const height = window.innerHeight;
const height = 350;

const margin = { top: 40, right: 40, bottom: 40, left: 40 };
const tickPadding = 10;

// Data setup

// must be a website, not local
const csvUrl =
  "https://gist.githubusercontent.com/mstuart1/5b220025beb870980cc648989ca82222/raw/cf9bd22bf41332125cbe2039c2a866faf68153d7/model_performance_streamflow";

const dateSpecifier = "%b-%Y";
const parseDay = timeParse(dateSpecifier);

const row = (d) => {
  d.date = parseDay(d.Date);
  d.streamflowObs = +d[`Observed Streamflow(cfs)`];
  d.streamflowSim = +d[`Simulated Streamflow(cfs)`];
  return d;
};

const useData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};

// X Axis setup - should not need to be adjusted between datasets
const XAxis = ({ xScale, innerHeight, tickPadding }) => {
  // want to access the raw DOM element of G so that we can use it for D3 axes
  const ref = useRef();
  useEffect(() => {
    const xAxisG = select(ref.current);

    const xAxis = axisBottom(xScale)
      .tickSize(-innerHeight)
      .tickPadding(tickPadding);
    xAxisG.call(xAxis);
  }, []);
  return <g transform={`translate(0,${innerHeight})`} ref={ref} />; // this makes some space defined by innerHeight
};

// Y Axis setup - should not need to be adjusted between datasets
const YAxis = ({ yScale, innerWidth, tickPadding }) => {
  const ref = useRef();
  useEffect(() => {
    const yAxisG = select(ref.current);
    const yAxis = axisLeft(yScale)
      .tickSize(-innerWidth)
      .tickPadding(tickPadding)
      .ticks(10, "~s");
    yAxisG.call(yAxis);
  }, []);

  return <g ref={ref} />;
};

// Line Chart Setup

const xValue = (d) => d.date;
const yValue = (d) => d.streamflowObs;
const y2Value = (d) => d.streamflowSim;

const LineChart = ({ data, width, height }) => {
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

  const lineGenerator2 = line()
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(y2Value(d)));

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

        <path
          fill="none"
          stroke="#007fac"
          strokeWidth="2"
          d={lineGenerator(data)}
        />

        <path
          fill="none"
          stroke="#EBB600"
          strokeWidth="2"
          strokeDasharray="0.2em"
          d={lineGenerator2(data)}
        />
      </g>
    </svg>
  );
};

export const LineChartPlotter = () => {
  const data = useData();
  // console.log(data[0]);
  return data ? (
    <LineChart data={data} width={width} height={height} />
  ) : (
    <div>Loading ...</div>
  );
};
