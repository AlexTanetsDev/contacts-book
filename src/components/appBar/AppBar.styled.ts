import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  z-index: 555;

  background-color: #60b8ff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (min-width: 450px) {
    padding: 15px 25px;
  }
`;
