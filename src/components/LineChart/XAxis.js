import React, { useEffect, useRef } from "react";
import { axisBottom, select } from "d3";
export const XAxis = ({ xScale, innerHeight, tickPadding }) => {
  // want to access the raw DOM element of G so that we can use it for D3 axes
  const ref = useRef();
  useEffect(() => {
    const xAxisG = select(ref.current);

    const xAxis = axisBottom(xScale)
      .tickSize(-innerHeight)
      .tickPadding(tickPadding);
    xAxisG.call(xAxis);
  }, []);
  return <g transform={`translate(0,${innerHeight})`} ref={ref} />;
};
