import React from "react";
import styled from "styled-components";
import GlobalFonts from "./fonts/fonts";
import { contactInfo } from "./contactInfo";

const HeaderContainer = styled.div`
  color: #000;
  background-color: #fff;
  padding: 10px 10px;
  display: flex;
  justify-content: flext start;
`;

const SebsText = styled.h1`
  font-family: "Libre Baskerville", serif;
  color: #000;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.25em;
  margin: 0;

  h1,
  h2 {
    margin: 0;
  }
`;

const UnitHeader = () => {
  return (
    <HeaderContainer>
      <GlobalFonts />
      <SebsText>
        <h1>{contactInfo.schoolName}</h1> <br />
        <h2>{contactInfo.unitName}</h2>
      </SebsText>
    </HeaderContainer>
  );
};

export default UnitHeader;
