import React from "react";
import { MiniCartWrap, MiniCartCount } from "./MiniCart.style";

const MiniCart = () => {
  return (
    <MiniCartWrap>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--m"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      <MiniCartCount>0</MiniCartCount>
    </MiniCartWrap>
  );
};

export default MiniCart;
