import styled from "styled-components";

export const ContactsInfo = styled.p`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;

export const AddContactBtn = styled.button`
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
  border: none;
  outline: none;

  :hover,
  :focus {
    background-color: #ec4d1c;
  }
`;

export const HomeViewTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  background-color: #fff;
  padding: 15px 40px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const AddContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  max-width: 300px;
`;
