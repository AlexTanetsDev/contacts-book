import { GreetingWraper } from "../components/greetingBox/GreetingBox.styled";
import { LoginForm } from "../components/logitForm/LoginForm";

export default function Login() {
  return (
    <GreetingWraper>
      <LoginForm />
    </GreetingWraper>
  );
}
