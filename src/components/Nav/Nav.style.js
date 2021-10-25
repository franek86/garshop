import styled from "styled-components";

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  position: relative;
`;

export const NavItem = styled.li`
  margin-right: 35px;
  font-size: 20px;
  a {
    color: ${({ theme }) => theme.colors.blackColor};
    font-weight: 300;

    &.active {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        height: 40px;
        width: 40px;
        border-radius: 100%;
        border: 2px solid ${({ theme }) => theme.colors.goldColor};
        z-index: -1;
        top: -7px;
        left: -10px;
      }
    }
  }
`;

export const HoverLink = styled.div`
  position: absolute;
  bottom: 27px;
  left: ${({ left }) => left};
  transition: left 0.3s ease-in;

  &:before {
    content: "";
    position: absolute;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    border: 2px solid ${({ theme }) => theme.colors.goldColor};
    background-color: ${({ theme }) => theme.colors.goldColor};
    z-index: -1;
    top: -7px;
    left: -10px;
  }
`;
