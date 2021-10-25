import React from "react";
import { Link } from "react-router-dom";
import Search from "../../Search/Search";

import { Wrapper, HeaderTopList, HeaderTopItem } from "./HeaderTop.style";

const HeaderTop = () => {
  return (
    <Wrapper>
      <nav>
        <HeaderTopList>
          <HeaderTopItem>
            <Link to="/about-us">About us</Link>
          </HeaderTopItem>

          <HeaderTopItem>
            <Link to="/contact">Contact</Link>
          </HeaderTopItem>
        </HeaderTopList>
      </nav>
      <Search />
    </Wrapper>
  );
};

export default HeaderTop;
