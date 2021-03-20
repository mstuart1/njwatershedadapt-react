import React from "react";
import styled from "styled-components";

const UnitBanner = styled.div`
  margin: 0;
  overflow: hidden;
  background: white;
  width: 100%;
  height: auto;
  padding: 1em;
`;

//   <link rel="preconnect" href="https://fonts.gstatic.com">
// <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet">
const SebsText = styled.h1`
  font-family: "Libre Baskerville", serif;
  color: #000;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
`;

const UnitHeader = () => {
  return (
    <UnitBanner>
      <SebsText>School of Environmental and Biological Sciences</SebsText>
    </UnitBanner>
  );
};

export default UnitHeader;
