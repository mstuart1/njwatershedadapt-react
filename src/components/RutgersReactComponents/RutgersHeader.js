import React from "react";
import styled from "styled-components";
import logo from "./RUTGERS_REVWHITE.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 5px 5px 0px 5px;
  background: #c03;
`;

const Menu = styled.ul`
  & > li {
    display: inline;
    margin-right: 10px;
    font-size: 12px;
  }

  & > li:last-of-type {
    margin-right: 0;
  }
`;

const Logo = styled.div`
  & img {
    width: 100px;
  }
`;

const RutgersHeader = () => {
  return (
    <header>
      <Nav>
        <Logo>
          <a href="https://www.rutgers.edu">
            <img src={logo} alt="Rutgers Logo" style={{ maxWidth: "464px" }} />
          </a>
        </Logo>
        <Menu>
          <li>
            <a
              style={{ color: "white" }}
              href="https://newbrunswick.rutgers.edu/"
            >
              Rutgers–New Brunswick
            </a>
          </li>
          <li>
            <a style={{ color: "white" }} href="https://my.rutgers.edu">
              myRutgers
            </a>
          </li>
          <li>
            <a
              style={{ color: "white" }}
              href="https://search.rutgers.edu/web.html"
            >
              Search Rutgers
            </a>
          </li>
        </Menu>
      </Nav>
    </header>
  );
};

export default RutgersHeader;
