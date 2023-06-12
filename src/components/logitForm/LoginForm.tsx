import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  FormLabel,
  SubmitButton,
  StyledField,
} from "../contactForm/ContactForm.styled";
import { useAppDispatch } from "../../hooks";
import { logIn } from "../../redux/auth/operators";
import { StyledLoginForm } from "./LoginFormStyled";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const schema = yup.object().shape({
  email: yup.string().required().matches(emailRegex),
  password: yup.string().required().min(6, "email must be more than 6 symbols"),
});
type FormData = yup.InferType<typeof schema>;

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: FormData) => {
    dispatch(logIn(data));
  };

  const handleEmailChange = (value: string) => {
    if (!emailRegex.test(value)) {
      setIsValidEmail(false);
      return;
    }
    setIsValidEmail(true);
  };

  const handlePassChange = (value: string) => {
    if (value.length < 6) {
      setIsValidPass(false);
      return;
    }
    setIsValidPass(true);
  };

  return (
    <StyledLoginForm
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormLabel htmlFor="email">
        Email
        <StyledField
          type="email"
          placeholder="example@mail.com"
          defaultValue=""
          {...register("email", {
            onChange: (e) => handleEmailChange(e.target.value),
          })}
        />
        {errors.email && <span>This field is required</span>}
      </FormLabel>

      <FormLabel htmlFor="password">
        Password
        <StyledField
          type="password"
          placeholder="example123"
          defaultValue=""
          {...register("password", {
            onChange: (e) => handlePassChange(e.target.value),
          })}
        />
        {errors.password && <span>This field is required</span>}
      </FormLabel>
      <SubmitButton type="submit">Log In</SubmitButton>
    </StyledLoginForm>
  );
};
