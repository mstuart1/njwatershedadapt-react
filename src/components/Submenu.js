import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

// the &:hover allows you to do the active etc with styled components
const SidebarLink = styled.a`
  display: flex;
  color: #white !important;
  justify-content: space-between;
  align-items: center;
  // padding: 20px;
  list-style: none;
  height: 50px;
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
  color: white !important;
`;

const Submenu = ({ item, depthStep = 10, depth = 0 }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubNav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink href={item.path} onClick={item.subNav && showSubNav}>
        <div style={{ paddingLeft: depth * depthStep }}>
          {item.icon}
          <SidebarLabel style={{ color: "white !important" }}>
            {item.title}
          </SidebarLabel>
        </div>

        {/* This is where the dropdown kicks in, if has subnav and if subnav is clicked (state) then show the open icon or ELSE if item has subnav show closed icon ELSE show nothing*/}
        {item.subNav && subnav
          ? item.iconOpened
          : item.subNav
          ? item.iconClosed
          : null}
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
