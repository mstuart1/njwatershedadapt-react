import React from "react";
import styled from "styled-components";
import Submenu from "./Submenu";

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

// these are commented out just in case we want to show/hide sidebar
// const MenuText = styled.text`
//   color: #fff;
//   font-size: large;
// `;

const Sidebar = ({ sidebarData }) => {
  // these are commented out just in case we want to show/hide sidebar
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => {
  //   setSidebar(!sidebar);
  // };

  return (
    <>
      {/* these are commented out just in case we want to show/hide sidebar */}
      {/* <NavCmpnt sidebar={sidebar} showSidebar={showSidebar} /> */}
      <SidebarNav>
        <SidebarWrap>
          {/* these are commented out just in case we want to show/hide sidebar */}
          {/* <MenuText onClick={showSidebar}>
              {sidebar ? "Hide Menu" : "Show Menu"}
            </MenuText> */}
          {sidebarData.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
