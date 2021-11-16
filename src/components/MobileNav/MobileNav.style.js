import styled from "styled-components";

export const HamburgerWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MobileHamburger = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 100;

  span {
    display: block;
    height: 1px;
    width: 100%;
    background-color: black;
    transform-origin: left;
    transition: all 0.25s ease-in-out;
  }

  &.active {
    span {
      &:first-child {
        transform: rotate(45deg);
        width: 30px;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: rotate(-45deg);
        width: 30px;
      }
    }
  }
`;

export const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.lightGreenColor};
  height: 100%;
  width: 75vw;
  transform: translateX(100%);
  opacity: 0;
  transition: all 0.25s ease-in-out;
  padding: 0 5% 50px 5%;

  &.active {
    transform: translateX(0%);
    opacity: 1;
  }
`;
