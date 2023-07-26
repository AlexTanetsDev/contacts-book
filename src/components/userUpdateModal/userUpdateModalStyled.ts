import styled from "styled-components";

// export const UserModal = styled.div`

//   display: flex;
//   justify-content: center;
//   padding: 10px;
//   width: 150px;
//   height: 200px;
//   border-radius: 15px;
// `;

export const CustomFileInput = styled.input.attrs({
  type: "file",
})`
  position: absolute;
  top: -1px;
  left: -1px;
  z-index: 10;
  width: 50px;
  height: 50px;
  background-color: #fff;
  opacity: 0;
  border-radius: 50%;
  cursor: pointer;
  ::-webkit-file-upload-button {
    display: none;
  }
`;

export const UserForm = styled.form`
  position: absolute;
  top: 0;
  left: -155px;
  display: flex;
  flex-direction: column;
  background-color: #999896;
  padding: 15px;
  gap: 5px;
  align-items: center;

  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const UserFormLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-size: 16px;
  font-weight: 500;
`;

export const UserFormStyledField = styled.input`
  border-radius: 15px;
  outline: none;
  padding: 2px 40px 2px 15px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #e0e0e0;
  :hover,
  :focus {
    outline: 2px solid #60b8ff;
  }
  max-width: 250px;
`;
export const UserFormSubmitButton = styled.button`
  text-decoration: none;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  background-color: #60b8ff;
  padding: 5px;
  margin-top: 5px;
  width: 150px;
  border-radius: 15px;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  :hover,
  :focus {
    background-color: #ec4d1c;
  }
`;
