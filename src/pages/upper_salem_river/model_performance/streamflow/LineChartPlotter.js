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
const height = 325;

const margin = { top: 40, right: 40, bottom: 60, left: 60 };

const tickPadding = 10; // how close the tick labels are to the chart

const xAxisLabelOffset = 40;
const yAxisLabelOffset = 40;

const solidColor = "#007fac";
const dashedColor = "#c03";

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

const xValue = (d) => d.date;
const yValue = (d) => d.streamflowObs;
const y2Value = (d) => d.streamflowSim;

const xAxisLabel = "";
const yAxisLabel = "Streamflow (cubic feet / second)";

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

    const xAxis = axisBottom(xScale).tickSize(5).tickPadding(tickPadding);
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
      .ticks(5); // how many ticks on the chart
    yAxisG
      .call(yAxis)
      .call((g) =>
        g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "#d8d8d8")
      );
    // .attr("stroke-dasharray", "2,2"));
  }, []);

  return <g ref={ref} />;
};

// Color Legend Setup - move this by putting it in a group element in Linechart
const ColorLegend = ({
  legendSpacing = 200,
  legendRadius = 5,
  legendLabelOffset = 10,
  // onHover,
}) => {
  let array = [
    {
      text: "Observed Streamflow (cfs)",
      color: "#007fac",
      dataValue: "streamflowObs",
    },
    {
      text: "Simulated Streamflow (cfs)",
      color: "#cc0033",
      dataValue: "streamflowSim",
    },
  ];
  return array.map((value, index) => (
    <g
      transform={`translate(${index * legendSpacing},0)`}
      // onMouseEnter={() => {
      //   onHover(value.text);
      // }}
    >
      <circle fill={value.color} r={legendRadius} />
      <text x={legendLabelOffset} style={{ fontSize: "12px" }} dy="0.32em">
        {value.text}
      </text>
    </g>
  ));
};

// Line Chart Setup

const LineChart = ({ data, width, height }) => {
  // can't use the hover because the data is organized into columns based on type.  If want to use hover, need to reshape the data to provide a type, date, and value as columns, then filter by type. Could create lines by type too so it would be nice to do.
  // const [hoveredValue, setHoveredValue] = useState(null);
  // console.log(hoveredValue);
  // console.log(data.columns);
  // const filteredData = data.filter(d => hoveredValue == )

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain([0, max(data, y2Value)])
    .range([innerHeight, 0])
    .nice();

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
        <text
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <text
          style={{ fontSize: "12px" }}
          textAnchor="middle"
          transform={`translate (${-yAxisLabelOffset}, ${
            innerHeight / 2
          }) rotate(-90)`} // translate has to come before the rotate
        >
          {yAxisLabel}
        </text>
        <g
          transform={`translate (${innerWidth / 4},${
            innerHeight + xAxisLabelOffset
          } )`}
          textAnchor="start"
        >
          <ColorLegend
          // onHover={setHoveredValue}
          />
        </g>

        <path
          fill="none"
          stroke={solidColor}
          strokeWidth="2"
          d={lineGenerator(data)}
        />

        <path
          fill="none"
          stroke={dashedColor}
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
