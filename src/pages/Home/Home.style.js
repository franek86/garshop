import styled from "styled-components";

export const Newsletter = styled.div`
  display: grid;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.md}) {
    grid-template-columns: 50% 1fr;
  }
`;

export const SliderImage = styled.img`
  width: 100%;
`;

export const SliderCaption = styled.div`
  min-width: 320px;
  position: absolute;
  bottom: 7px;
  left: calc(50% - 160px);
  padding: 1rem;
  background-color: ${({ bgColor }) =>
    bgColor === "white" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"};
  color: ${({ bgColor }) => (bgColor === "dark" ? "#fff" : "#000")};
  text-align: center;
  text-transform: uppercase;
`;
