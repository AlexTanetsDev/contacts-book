import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const GreetingWraper = styled.div`
  position: relative;

  max-width: 350px;
  min-height: 300px;
  background-color: #e0e0e0;

  margin: 0 auto;
  padding: 10px 10px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media screen and (min-width: 450px) {
    max-width: 500px;
    min-height: 350px;

    padding: 30px 15px;
    gap: 10px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  padding: 15px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const GreetingTitle = styled.h2`
  font-size: 32px;
  text-align: center;
`;

export const GreetingTag = styled.p`
  font-size: 26px;
  font-style: italic;
  font-weight: 600;
  color: #2c3fe4;
  text-align: center;
`;

export const GreetingBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const GreetingBtn = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
  background-color: #60b8ff;
  padding: 5px;
  width: 250px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  :hover,
  :focus {
    background-color: #ec4d1c;
  }
`;

export const IconBox = styled.div`
  display: flex;
  gap: 15px;
`;
