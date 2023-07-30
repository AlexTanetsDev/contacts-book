import { FC } from "react";
import { LoginLogoutBtn } from "./LoginLinkBtn.styled";

type LogitLinkBtnProps = {
  title: string;
  to: string;
};

export const LoginLinkBtn: FC<LogitLinkBtnProps> = ({ title, to }) => {
  return (
    <LoginLogoutBtn to={to} reloadDocument>
      {title}
    </LoginLogoutBtn>
  );
};
