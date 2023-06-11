import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormLabel,
  SubmitButton,
  StyledField,
} from "../contactForm/ContactForm.styled";
import { useAppDispatch } from "../../hooks";
import { logIn } from "../../redux/auth/operators";
import { StyledLoginForm } from "./LoginFormStyled";

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(logIn(data));
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
      <SubmitButton type="submit">Log In</SubmitButton>
    </StyledLoginForm>
  );
};
