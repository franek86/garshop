import styled from "styled-components";

export const PaginationList = styled.ul`
  display: flex;
`;

export const PaginationBtn = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.blackColor};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blackColor};
  height: 35px;
  width: 35px;
  margin-right: 10px;
  cursor: pointer;
  transform: all 0.25s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blackColor};
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;
