import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media screen and (min-width: 450px) {
    flex-direction: row;
    gap: 15px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  font-size: 14px;

  color: #ffffff;
  font-weight: 500;
  background-color: #bebcbc;
  padding: 5px;
  width: 70px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  :hover,
  :focus {
    background-color: #5365ff;
  }

  @media screen and (min-width: 450px) {
    padding: 7px;
    width: 80px;

    font-size: 16px;
  }
`;
