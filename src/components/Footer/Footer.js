import React, { useState, useEffect } from "react";
import Subscribe from "../Subscribe/Subscribe";

import { Container } from "../../Global.styled";
import { FooterWrap, FooterLine, CopyRight } from "./Footer.style";

export const Footer = () => {
  const [year, setYear] = useState();

  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);
  return (
    <>
      <FooterLine />
      <Container>
        <FooterWrap>
          <div>
            <h5>Gar store</h5>
            <ul>
              <li>Gar store d.o.o</li>
              <li>Address 00, Zagreb</li>
            </ul>

            <ul>
              <li>Gar store d.o.o</li>
              <li>Address 00, Split</li>
            </ul>

            <ul>
              <li>mail@garstore.hr</li>
              <li>+385 1 222 3333 (Zagreb)</li>
              <li>+385 1 222 4444 (Split)</li>
            </ul>
          </div>
          <div>
            <h5>Site map</h5>

            <ul>
              <li>
                <a href="#">New Collection</a>
              </li>
              <li>
                <a href="#">Archive</a>
              </li>

              <li>
                <a href="#">Brands</a>
              </li>

              <li>
                <a href="#">About us</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Info</h5>

            <ul>
              <li>
                <a href="#">Pamynet</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>

            <h5>Newsletter</h5>
            <Subscribe />
          </div>
        </FooterWrap>

        <CopyRight>
          <p>All right reserved &copy; {year}</p>
        </CopyRight>
      </Container>
    </>
  );
};
