import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  FormLabel,
  StyledField,
  SubmitButton,
} from "../contactForm/ContactForm.styled";
import { StyledLoginForm } from "../logitForm/LoginFormStyled";
import { useAppDispatch } from "../../hooks";
import { userRegister } from "../../redux/auth/operators";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = async (data) => {
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
