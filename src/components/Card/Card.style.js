import styled from "styled-components";

export const CardWrap = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgba(36, 36, 36, 0.15);
`;

export const CardImage = styled.img`
  height: 360px;
  width: 100%;
  object-fit: contain;
`;

export const CardFooter = styled.footer`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;

  h2 {
    color: ${({ theme }) => theme.colors.blackColor};
    margin: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 300;
  }
`;
