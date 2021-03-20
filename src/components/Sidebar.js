import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { sidebarData } from "./sidebarData";
import Submenu from "./Submenu";
import NavCmpnt from "./NavCmpnt";

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

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <NavCmpnt sidebar={sidebar} showSidebar={showSidebar} />
      <SidebarNav>
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
