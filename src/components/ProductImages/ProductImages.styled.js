import styled from "styled-components";

export const ProductImage = styled.img`
  width: 100%;
  border: 1px solid #d3ced2;
  cursor: pointer;
`;

export const ProductImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  img {
    border: 1px solid rgba(0, 0, 0, 0.3);
    cursor: pointer;
    width: 100%;
    height: 100px;
    object-fit: contain;
    border: 1px solid #d3ced2;

    &.active {
      border: 1px solid ${({ theme }) => theme.colors.blackColor};
    }
  }
`;
