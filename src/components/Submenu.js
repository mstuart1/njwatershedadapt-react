import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// the &:hover allows you to do the active etc with styled components
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  // padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

// const DropdownLink = styled(Link)`
//   background: #414757;
//   height: 60px;
//   padding-left: 3rem;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   color: #f5f5f5;
//   font-size: 18px;

//   &:hover {
//     background: #632ce4;
//     cursor: pointer;
//   }
// `;
const Submenu = ({ item, depthStep = 10, depth = 0 }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubNav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
        <div style={{ paddingLeft: depth * depthStep }}>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {/* This is where the dropdown kicks in, if has subnav and if subnav is clicked (state) then show the open icon or ELSE if item has subnav show closed icon ELSE show nothing*/}
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {/* map through to add submenu items if subnav is true, map through the subNav of the item */}
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Submenu
              item={item}
              depthStep={depthStep}
              depth={depth + 2}
              key={index}
            />
          );
        })}
    </>
  );
};

export default Submenu;
