import { GreetingWraper } from "../components/greetingBox/GreetingBox.styled";
import { LoginLinkBtn } from "../components/loginLinkBtn/LoginLinkBtn";
import { RegisterForm } from "../components/registerForm/RegisterForm";

export default function Register() {
  return (
    <GreetingWraper>
      <RegisterForm />
      <LoginLinkBtn title={"Sing in"} to={"/login"} />
    </GreetingWraper>
  );
}
