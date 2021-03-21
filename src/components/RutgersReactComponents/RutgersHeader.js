import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./rutgers-logo.png";

const MenuContainer = styled.div`
  color: #fff;
  background-color: #c03;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

const Menu = styled.div`
  margin: 0 10px;
  width: 2000px;
  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
`;

const LinkItem = styled(Link)`
  color: white !important;
`;

const RutgersHeader = () => {
  return (
    <>
      <MenuContainer>
        <Menu>
          <div className="logo">
            <a href="https://www.rutgers.edu">
              <img src={logo} alt="Rutgers Logo" />
            </a>
          </div>
          <Links>
            <LinkItem to="https://newbrunswick.rutgers.edu/">
              Rutgers–New Brunswick
            </LinkItem>
            <LinkItem to="https://my.rutgers.edu">myRutgers</LinkItem>
            <LinkItem to="https://search.rutgers.edu/web.html">
              Search Rutgers
            </LinkItem>
          </Links>
        </Menu>
      </MenuContainer>
    </>
  );
};

export default RutgersHeader;
