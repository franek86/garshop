import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 16px;
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
