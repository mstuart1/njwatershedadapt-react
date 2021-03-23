import React, { useEffect, useRef } from "react";
import { axisLeft, select } from "d3";
export const YAxis = ({ yScale, innerWidth, tickPadding }) => {
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
