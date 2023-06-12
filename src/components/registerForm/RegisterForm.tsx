import * as yup from "yup";
import { useForm } from "react-hook-form";

import {
  FormLabel,
  StyledField,
  SubmitButton,
} from "../contactForm/ContactForm.styled";
import { StyledLoginForm } from "../logitForm/LoginFormStyled";
import { useAppDispatch } from "../../hooks";
import { userRegister } from "../../redux/auth/operators";
import { yupResolver } from "@hookform/resolvers/yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

type FormData = yup.InferType<typeof schema>;
export const RegisterForm = () => {
  const dispatch = useAppDispatch();
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

  return (
    <StyledLoginForm
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormLabel htmlFor="name">
        Username
        <StyledField
          type="text"
          placeholder="userName"
          defaultValue=""
          {...register("name")}
        />
        {errors.name && <span>This field is required</span>}
      </FormLabel>
      <FormLabel htmlFor="email">
        Email
        <StyledField
          type="email"
          placeholder="example@mail.com"
          defaultValue=""
          {...register("email")}
        />
        {errors.email && <span>This field is required</span>}
      </FormLabel>
      <FormLabel htmlFor="password">
        Password
        <StyledField
          type="password"
          placeholder="example123"
          defaultValue=""
          {...register("password")}
        />
        {errors.password && <span>This field is required</span>}
      </FormLabel>
      <SubmitButton type="submit">Register</SubmitButton>
    </StyledLoginForm>
  );
};
