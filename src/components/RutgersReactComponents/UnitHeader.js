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

// links to import fonts
//   <link rel="preconnect" href="https://fonts.gstatic.com">
// <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet">
const SebsText = styled.h1`
  font-family: "Libre Baskerville", serif;
  color: #000;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.25;
`;

const UnitHeader = () => {
  return (
    <HeaderContainer>
      <GlobalFonts />
      <SebsText>
        {contactInfo.unitName} - {contactInfo.schoolName}
      </SebsText>
    </HeaderContainer>
  );
};

export default UnitHeader;
