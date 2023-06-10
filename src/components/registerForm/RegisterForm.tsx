import { FormLabel, SubmitButton } from "../contactForm/ContactForm.styled";
import { StyledInput } from "../filter/filter.styled";
import { StyledLoginForm } from "../logitForm/LoginFormStyled";
import { useAppDispatch } from "../../hooks";
import { register } from "../../redux/auth/operators";

export const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: {
    preventDefault: () => void;
    currentTarget: any;
  }) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Username
        <StyledInput type="text" name="name" placeholder="userName" />
      </FormLabel>
      <FormLabel>
        Email
        <StyledInput type="email" name="email" placeholder="example@mail.com" />
      </FormLabel>
      <FormLabel>
        Password
        <StyledInput type="password" name="password" placeholder="example123" />
      </FormLabel>
      <SubmitButton type="submit">Register</SubmitButton>
    </StyledLoginForm>
  );
};
