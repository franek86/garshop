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

    .icon--m{
        width: 30px;
        height: 30px;
    }

    .approx__price{
      font-size: 12px;
    }

    //Slider global style navigation and paginaiton
    .swiper-button-prev,
    .swiper-button-next{
      position: static;
      top: unset;
      bottom: 0;
      margin-top: 0;
      padding: 35px;
      
      &:after{
        font-size:2rem;
      }
    }

    .swiper-button-next{
      right:0px;
      background-color: ${({ theme }) => theme.colors.blackColor};
      &:after{
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
    .swiper-button-prev{
      right:auto; 
      left:calc(100% - 130px);
       &:after{
        color: ${({ theme }) => theme.colors.blackColor};
      }
    }

    .swiper-pagination{
      left: calc(50% + 70px);
    }

    .swiper-pagination-bullet{
      height: 12px;
      width:12px;
      opacity: 1;
      margin-right: 8px;
      border:1px solid ${({ theme }) => theme.colors.blackColor};
    }

    .swiper-pagination-bullet-active{
      background: transparent;
      border:1px solid ${({ theme }) => theme.colors.blackColor};
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
  font-size: 24px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.blackColor};
  font-weight: 400;
`;

export default GlobalStyles;
