import { logOut } from "../../redux/auth/operators";
import { selectUser } from "../../redux/auth/selectors";
import { StyledLogoutBtn, UserName, UserWraper } from "./UserMenu.styled";
import { FaUserCircle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IUser } from "../../redux/auth/authSlice";

export const UserMenu = () => {
  const user: IUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <UserWraper>
      <UserName>
        {" "}
        <FaUserCircle size={25} color={"#fff"} />
        {user.name}
      </UserName>
      <StyledLogoutBtn onClick={handleClick}>Logout</StyledLogoutBtn>
    </UserWraper>
  );
};
