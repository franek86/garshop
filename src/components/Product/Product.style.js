import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: row;
`;

export const CardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.blackColor};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 300;
`;

export const CardImage = styled.img``;
