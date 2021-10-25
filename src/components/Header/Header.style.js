import styled from "styled-components";

export const BorderHeader = styled.div`
  height: 8px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.orangeColor} 0%,
    ${({ theme }) => theme.colors.yellowColor} 50%,
    ${({ theme }) => theme.colors.greyColor} 100%
  );
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.orangeColor};
`;
