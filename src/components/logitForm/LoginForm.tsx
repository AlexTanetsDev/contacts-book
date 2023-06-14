import * as yup from "yup";
import { useForm } from "react-hook-form";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import {
  FormLabel,
  SubmitButton,
  StyledField,
} from "../contactForm/ContactForm.styled";
import { useAppDispatch } from "../../hooks";
import { logIn } from "../../redux/auth/operators";
import { StyledLoginForm, EyeIconWrapper } from "./LoginFormStyled";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const schema = yup.object().shape({
  email: yup.string().required().matches(emailRegex),
  password: yup
    .string()
    .required()
    .min(6, "Password can't be less than 6 letters"),
});
type FormData = yup.InferType<typeof schema>;

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);
  const [isSecure, setIsSecure] = useState(true);

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
          style={{
            outline: isValidEmail ? "" : "1px solid red",
          }}
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
          style={{
            outline: isValidPass ? "" : "1px solid red",
          }}
          type={isSecure ? "password" : "text"}
          placeholder="example123"
          defaultValue=""
          {...register("password", {
            onChange: (e) => handlePassChange(e.target.value),
          })}
        />
        <EyeIconWrapper onClick={() => setIsSecure(!isSecure)}>
          {isSecure ? <BsEyeSlash /> : <BsEye />}
        </EyeIconWrapper>
        {errors.password && <span>This field is required</span>}
      </FormLabel>
      <SubmitButton type="submit">Log In</SubmitButton>
    </StyledLoginForm>
  );
};
