import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 15px;
  outline: none;
  padding: 2px 10px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  width: 250px;
  :hover,
  :focus {
    outline: 2px solid #60b8ff;
  }

  @media screen and (min-width: 450px) {
    width: 350px;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  font-size: 24px;
  font-weight: 500;
`;
