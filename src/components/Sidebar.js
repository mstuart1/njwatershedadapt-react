import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
import { sidebarData } from "./sidebarData";
import Submenu from "./Submenu";
import NavCmpnt from "./NavCmpnt";

const SidebarNav = styled.nav`
  color: white;
  background: #000000d5;
  width: 430px;
  height: 90vh;
  display: flex;
  justify-content: center;
  position: fixed;
  left: -100%;
  transition: 350ms;
  z-index: 10;
  overflow-y: scroll;
  top: 150px;

  .active {
    left: 0;
  }
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
      <div style={{ color: "white" }}>
        <NavCmpnt sidebar={sidebar} showSidebar={showSidebar} />

        <SidebarNav className={sidebar ? "active" : null}>
          <SidebarWrap>
            {sidebarData.map((item, index) => {
              return <Submenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </div>
    </>
  );
};

export default Sidebar;
