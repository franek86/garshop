import React, { useState } from "react";
import MiniCart from "../MiniCart/MiniCart";
import Search from "../Search/Search";
import WishListIcon from "../WishListIcon/WishListIcon";
import { HamburgerWrap, MobileHamburger, MobileMenu } from "./MobileNav.style";

const MobileNav = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  return (
    <HamburgerWrap>
      <WishListIcon />
      <MiniCart />
      <HamburgerWrap>
        <MobileHamburger
          onClick={handleClick}
          className={isActive ? "active" : null}
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileHamburger>
      </HamburgerWrap>
      <MobileMenu className={isActive ? "active" : null}>
        <Search />
      </MobileMenu>
    </HamburgerWrap>
  );
};

export default MobileNav;
