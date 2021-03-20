import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  background: #15171c;
  height: 50px;
  display: flex;
  display-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`;
const MenuText = styled.text`
  color: #fff;
  font-size: large;
`;
const NavCmpnt = ({ sidebar, showSidebar }) => {
  return (
    <Nav>
      <NavIcon to="#">
        <MenuText onClick={showSidebar}>
          {sidebar ? "Hide Menu" : "Show Menu"}
        </MenuText>
      </NavIcon>
    </Nav>
  );
};

export default NavCmpnt;
