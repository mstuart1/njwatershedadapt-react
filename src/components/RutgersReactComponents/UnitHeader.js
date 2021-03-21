import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
  color: #000;
  background-color: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: flext start;
`;

// links to import fonts
//   <link rel="preconnect" href="https://fonts.gstatic.com">
// <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet">
const SebsText = styled.h1`
  font-family: "Libre Baskerville", serif;
  color: #000;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
  margin: 0 10px;
`;

const UnitHeader = () => {
  return (
    <MenuContainer>
      <SebsText>School of Environmental and Biological Sciences</SebsText>
    </MenuContainer>
  );
};

export default UnitHeader;
