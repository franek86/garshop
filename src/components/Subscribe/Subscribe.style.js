import styled from "styled-components";

export const FormSubscribe = styled.form`
  display: flex;
  align-items: center;
  max-height: 80px;
`;

export const InputEvent = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.blackColor};
  padding: 20px 10px;
  width: 100%;
  background-color: transparent;
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.blackColor};
  background: ${({ theme }) => theme.colors.blackColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  font-weight: bold;
  text-transform: uppercase;
  padding: 20px 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.greenColor};
    background: ${({ theme }) => theme.colors.greenColor};
  }
`;
