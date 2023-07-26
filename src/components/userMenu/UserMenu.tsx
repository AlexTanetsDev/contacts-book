import { logOut } from "../../redux/auth/operators";
import { selectUser } from "../../redux/auth/selectors";
import {
  StyledLogoutBtn,
  UserName,
  UserWraper,
  UserAvatar,
} from "./UserMenu.styled";
import { UserUpdateModal } from "../userUpdateModal/userUpdateModal";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IUser } from "../../redux/auth/authSlice";
import { useState } from "react";

export const UserMenu = () => {
  const user: IUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    dispatch(logOut());
  };

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <UserWraper>
      {isOpen && <UserUpdateModal user={user} />}
      <UserName>
        <span onClick={handleToggleModal} style={{ cursor: "pointer" }}>
          <UserAvatar alt="User avatar" src={user.avatar} />
        </span>
        {user.name}
      </UserName>
      <StyledLogoutBtn onClick={handleClick}>Logout</StyledLogoutBtn>
    </UserWraper>
  );
};
