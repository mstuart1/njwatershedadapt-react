import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { sidebarData } from "./sidebarData";
import Submenu from "./Submenu";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  display-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`;

const SidebarNav = styled.nav`
  background: #000000d5;
  width: 430px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  // top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  overflow-y: scroll;
`;

const SidebarWrap = styled.div`
  width: 200%;
`;

const MenuText = styled.text`
  color: #fff;
  font-size: large;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Nav>
        <NavIcon to="#">
          <MenuText onClick={showSidebar}>
            {sidebar ? "Hide Menu" : "Show Menu"}
          </MenuText>
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          {sidebarData.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
