import * as yup from "yup";
import { useForm } from "react-hook-form";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import {
  FormLabel,
  StyledField,
  SubmitButton,
} from "../contactForm/ContactForm.styled";
import { EyeIconWrapper, StyledLoginForm } from "../logitForm/LoginFormStyled";
import { useAppDispatch } from "../../hooks";
import { userRegister } from "../../redux/auth/operators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Name can't be empty"),
  email: yup
    .string()
    .required("Email is required")
    .matches(emailRegex, "Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password can't be less than 6 letters"),
});

type FormData = yup.InferType<typeof schema>;
export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isSecure, setIsSecure] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: FormData) => {
    dispatch(userRegister(data));
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
  const handleNameChange = (value: string) => {
    if (value.length < 2) {
      setIsValidName(false);
      return;
    }
    setIsValidName(true);
  };
  return (
    <StyledLoginForm
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormLabel htmlFor="name">
        User Name
        <StyledField
          style={{
            outline: isValidName ? "" : "1px solid red",
          }}
          type="text"
          placeholder="User Name"
          defaultValue=""
          {...register("name", {
            onChange: (e) => handleNameChange(e.target.value),
          })}
        />
        {errors?.name && <p>{errors.name.message}</p>}
      </FormLabel>
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
        {errors?.email && <p>{errors.email.message}</p>}
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
        {errors?.password && <p>{errors.password.message}</p>}
      </FormLabel>
      <SubmitButton type="submit">Register</SubmitButton>
    </StyledLoginForm>
  );
};
