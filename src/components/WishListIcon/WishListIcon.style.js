import styled from "styled-components";

export const WishListWrap = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  margin-right: 15px;

  &:hover {
    svg {
      fill: black;
    }
  }
`;

export const WishListCount = styled.div`
  height: 20px;
  width: 20px;
`;
