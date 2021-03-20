import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./rutgers-logo.png";

const Nav = styled.div`
  background: #c03;
  height: 50px;
  display: flex;
  display-content: flex-start;
  align-items: center;
`;

const RutgersLogo = styled(Link)`
  margin-right: auto;
  margin-left: 1em;
`;

const NavRight = styled.div`
  margin-left: auto;
`;

const LineItem = styled.li`
  display: inline-block;
  list-style-type: none;
  color: white;
  padding: 1em;
  font-size: 0.75em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-transform: uppercase;
`;

const RutgersLinks = styled(Link)`
  color: white !important;
  text-decoration: none;
`;

const RutgersHeader = () => {
  return (
    <Nav>
      <div className="nav-left">
        <RutgersLogo to="https://www.rutgers.edu">
          <img src={logo} alt="Rutgers Logo" />
        </RutgersLogo>
      </div>
      <NavRight>
        <ol>
          <LineItem>
            <RutgersLinks href="https://newbrunswick.rutgers.edu/">
              Rutgers–New Brunswick
            </RutgersLinks>
          </LineItem>

          <LineItem>
            <RutgersLinks href="https://my.rutgers.edu">
              myRutgers{" "}
            </RutgersLinks>
          </LineItem>

          <LineItem>
            <RutgersLinks href="https://search.rutgers.edu/web.html">
              Search Rutgers
            </RutgersLinks>
          </LineItem>
        </ol>
      </NavRight>
    </Nav>
  );
};

export default RutgersHeader;
