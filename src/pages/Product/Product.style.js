import styled from "styled-components";

export const ProductWrap = styled.article`
  margin-top: 60px;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.md}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(350px, 1fr));
    gap: 40px;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 42px;
  font-weight: 400;
  margin: 0;
`;
export const ProductBrand = styled.h2`
  font-size: 24px;
  font-weight: 300;
  margin: 0 0 30px 0;
  text-transform: uppercase;
  a {
    color: ${({ theme }) => theme.colors.blackColor};
  }
`;

export const ProductPrice = styled.h2`
  font-size: 42px;
  font-weight: 300;
  margin: 0 0 30px 0;
`;

export const ProductInStock = styled.div`
  color: ${({ theme }) => theme.colors.orangeColor};
  margin-bottom: 30px;
`;

export const ProductInfo = styled.div`
  margin-bottom: 20px;
  h3 {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0;
  }
`;
