import { GreetingWraper } from "../components/greetingBox/GreetingBox.styled";
import { RegisterForm } from "../components/registerForm/RegisterForm";

export default function Register() {
  return (
    <GreetingWraper>
      <RegisterForm />
    </GreetingWraper>
  );
}
