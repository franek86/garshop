import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import MiniCart from "../MiniCart/MiniCart";
import WishListIcon from "../WishListIcon/WishListIcon";

import { DesktopNav, NavList, NavItem, HoverLink } from "./Nav.style";

const Nav = () => {
  const [left, setLeft] = useState(0);
  const [elWidth, setElWidth] = useState(0);

  const navList = useRef();
  const showHover = (e) => {
    const listOffset = navList.current.offsetLeft;
    const location = e.target.getBoundingClientRect();
    const leftPos = location.x - listOffset;
    const elWidth = location.width;

    setLeft(`${leftPos}px`);
    setElWidth(`${elWidth}px`);
  };
  return (
    <DesktopNav>
      <NavList ref={navList}>
        <NavItem onMouseEnter={showHover}>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </NavItem>
        <NavItem onMouseEnter={showHover}>
          <NavLink to="/brands" activeClassName="active">
            Brands
          </NavLink>
        </NavItem>
        <NavItem onMouseEnter={showHover}>
          <NavLink to="/new-collection" activeClassName="active">
            New Collection
          </NavLink>
        </NavItem>
        <NavItem onMouseEnter={showHover}>
          <NavLink to="/archive" activeClassName="active">
            Archive
          </NavLink>
        </NavItem>

        <HoverLink left={left} width={elWidth} />
      </NavList>

      <WishListIcon />
      <MiniCart />
    </DesktopNav>
  );
};

export default Nav;
