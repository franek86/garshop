import React from "react";
import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";
import { Container } from "../../Global.styled";
import { BorderHeader, Wrapper, Logo } from "./Header.style";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <>
      <BorderHeader />
      <Container>
        <HeaderTop />
        <Wrapper>
          <Link to="/">
            <Logo>Garshop</Logo>
          </Link>
          <Nav />
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;
