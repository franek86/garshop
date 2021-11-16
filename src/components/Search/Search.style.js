import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;

  form {
    position: relative;
    display: flex;
  }
`;

export const SearchInput = styled.input`
  padding: 10px 0;
  font-size: 14px;
  background: transparent;
  border: none;
  border-bottom: 1px solid black;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.md}) {
    padding: 10px;
    width: 220px;
  }
`;

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  cursor: pointer;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.md}) {
    position: absolute;
    top: 8px;
    right: 6px;
    border: 0;
  }
`;
