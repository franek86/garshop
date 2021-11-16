import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.md}) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 16px;
  }
`;

export const HeaderTopList = styled.ul`
  display: flex;
`;

export const HeaderTopItem = styled.li`
  margin-right: 35px;

  &:last-child {
    margin-right: 0;
  }
  a {
    color: ${({ theme }) => theme.colors.blackColor};
    font-weight: 300;
  }
`;
