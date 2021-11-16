import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";
import { Container } from "../../Global.styled";
import { BorderHeader, Wrapper, Logo } from "./Header.style";
import HeaderTop from "./HeaderTop/HeaderTop";
import MobileNav from "../MobileNav/MobileNav";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakepoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  return (
    <>
      <BorderHeader />
      <Container>
        <HeaderTop />
        <Wrapper>
          <Link to="/">
            <Logo>Garshop</Logo>
          </Link>
          {width < breakepoint ? (
            <div>
              <MobileNav />
            </div>
          ) : (
            <Nav />
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;
