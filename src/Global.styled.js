import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


    *{
        box-sizing: border-box;
    }

    body{
        margin: 0;
        font-size: 16px;
        font-family: "Poppins", sans-serif;
        font-weight: 300;
    }

    ul{
        margin: 0;
        padding:0;
    }

    ul,li, ol{
        list-style: none;
        
    }

    a{
        text-decoration:none;
    }

    :focus{
        outline: none;
    }

    .icon--s{
        width: 20px;
        height: 20px;
    }




`;

export const Container = styled.div`
  width: 1320px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Section = styled.section`
  width: 100%;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "")};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : "")};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? paddingBottom : ""};
  padding: ${({ padding }) => (padding ? padding : "0 0 0 0")};
  position: ${({ position }) => (position ? position : "")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "")};
`;

export const MainHeading = styled.h1`
  font-size: clamp(1.875rem, 4vw, 3rem);
`;

export default GlobalStyles;
