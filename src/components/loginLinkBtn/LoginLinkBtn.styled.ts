import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LoginLogoutBtn = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  background-color: #60b8ff;
  padding: 5px;
  width: 150px;
  border-radius: 15px;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 15px;

  :hover,
  :focus {
    background-color: #ec4d1c;
  }
`;
