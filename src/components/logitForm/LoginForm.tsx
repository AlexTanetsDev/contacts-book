import { FormLabel, SubmitButton } from "../contactForm/ContactForm.styled";
import { StyledInput } from "../filter/filter.styled";
import { useAppDispatch } from "../../hooks";
import { logIn } from "../../redux/auth/operators";
import { StyledLoginForm } from "./LoginFormStyled";

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: {
    preventDefault: () => void;
    currentTarget: any;
  }) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Email
        <StyledInput type="email" name="email" placeholder="example@mail.com" />
      </FormLabel>
      <FormLabel>
        Password
        <StyledInput type="password" name="password" placeholder="example123" />
      </FormLabel>
      <SubmitButton type="submit">Log In</SubmitButton>
    </StyledLoginForm>
  );
};
