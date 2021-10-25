import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;

  form {
    position: relative;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 14px;
  width: 220px;
`;

export const SearchButton = styled.button`
  background: transparent;
  border: 0;
  position: absolute;
  top: 8px;
  right: 6px;
  cursor: pointer;
`;
