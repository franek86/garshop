import styled from "styled-components";

export const MiniCartWrap = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  margin-right: 25px;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.md}) {
    margin-right: 0;
  }

  &:hover {
    svg {
      fill: black;
    }
  }
`;

export const MiniCartCount = styled.div`
  height: 20px;
  width: 20px;
`;
