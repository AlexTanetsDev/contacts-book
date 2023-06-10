import styled from "styled-components";

export const List = styled.ul`
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  border-radius: 15px;

  @media screen and (min-width: 450px) {
    min-width: 400px;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: #e0e0e0;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Contact = styled.p`
  font-size: 20px;
  font-weight: 500;

  @media screen and (min-width: 450px) {
    font-size: 24px;
    font-weight: 500;
  }
`;

export const DeleteContactBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
  outline: none;

  :hover,
  :focus {
    background-color: #ec4d1c;
    color: #fff;
  }
`;
