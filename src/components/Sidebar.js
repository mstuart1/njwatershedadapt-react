import React from "react";
import styled from "styled-components";
// import * as FaIcons from "react-icons/fa";
import { sidebarData } from "./sidebarData";
import Submenu from "./Submenu";
// import NavCmpnt from "./NavCmpnt";

const SidebarNav = styled.nav`
  border: 1px solid black;
  background-color: #000000d5;
  height: 430px;
  flex: initial;
  width: 300px;
  flex-wrap: wrap;
`;

const SidebarWrap = styled.div`
  width: 200%;
`;

// const MenuText = styled.text`
//   color: #fff;
//   font-size: large;
// `;

const Sidebar = () => {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => {
  //   setSidebar(!sidebar);
  // };

  return (
    <>
      {/* <div style={{ color: "white" }}> */}
      {/* <NavCmpnt sidebar={sidebar} showSidebar={showSidebar} /> */}

      <SidebarNav>
        <SidebarWrap>
          {/* <MenuText onClick={showSidebar}>
              {sidebar ? "Hide Menu" : "Show Menu"}
            </MenuText> */}
          {sidebarData.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
      {/* </div> */}
    </>
  );
};

export default Sidebar;
