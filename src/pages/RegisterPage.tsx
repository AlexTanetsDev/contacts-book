import { useState } from "react";
import { GreetingWraper } from "../components/greetingBox/GreetingBox.styled";
import { LoginLinkBtn } from "../components/loginLinkBtn/LoginLinkBtn";
import { RegisterForm } from "../components/registerForm/RegisterForm";
import { useAppSelector } from "../hooks";
import { selectMessage } from "../redux/auth/selectors";

export default function Register() {
  const [message] = useState(useAppSelector(selectMessage));

  return (
    <GreetingWraper>
      {message ? (
        <>
          <p>{message}</p>
          <input type="text" />
          <button type="button">Send</button>
        </>
      ) : (
        <>
          <RegisterForm />
          <LoginLinkBtn title={"Sing in"} to={"/login"} />
        </>
      )}
    </GreetingWraper>
  );
}
