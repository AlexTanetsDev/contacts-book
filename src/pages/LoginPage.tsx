import { GreetingWraper } from "../components/greetingBox/GreetingBox.styled";
import { LoginLinkBtn } from "../components/loginLinkBtn/LoginLinkBtn";
import { LoginForm } from "../components/logitForm/LoginForm";

export default function Login() {
  return (
    <GreetingWraper>
      <LoginForm />
      <LoginLinkBtn title={"Sing up"} to={"/register"} />
    </GreetingWraper>
  );
}
