import styled from "styled-components";

export const FooterLine = styled.div`
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, #e09270 0%, #ffcb38 50%, #9aa084 100%);
  margin: 20px 0 60px 0;
`;

export const FooterWrap = styled.footer`
  display: grid;
  margin-bottom: 60px;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: ${({ theme }) => theme.sizes.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  h5,
  ul {
    margin-bottom: 16px;
  }

  h5 {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 400;
  }

  a {
    font-size: 16px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blackColor};
    line-height: 24px;
  }
`;

export const CopyRight = styled.div`
  text-align: center;
  font-size: 12px;
`;
