import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
                <Link href="#">New Collection</Link>
              </li>
              <li>
                <Link href="#">Archive</Link>
              </li>

              <li>
                <Link href="#">Brands</Link>
              </li>

              <li>
                <Link href="#">About us</Link>
              </li>

              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Info</h5>

            <ul>
              <li>
                <Link href="#">Payment</Link>
              </li>
              <li>
                <Link href="#">Shipping</Link>
              </li>
              <li>
                <Link href="#">Terms</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
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
