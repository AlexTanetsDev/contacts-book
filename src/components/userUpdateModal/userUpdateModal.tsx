import { FC, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiPlusCircle } from "react-icons/bi";

import { useAppDispatch } from "../../hooks";
import { IUser } from "../../redux/auth/authSlice";
import { UserAvatar } from "../userMenu/UserMenu.styled";
import {
  CustomFileInput,
  UserForm,
  UserFormLabel,
  UserFormStyledField,
  UserFormSubmitButton,
} from "./userUpdateModalStyled";

interface IUserModalProps {
  user: IUser;
}

const nameRegEx = /^[A-Za-zА-Яа-яІіЇїЄєҐґ0-9\s'-]+$/;
const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(1, "Name can't be empty")
    .matches(nameRegEx, {
      message: "Name can include only letterrs, numbers, '-'",
    }),
  email: yup.string().required().matches(emailPattern, {
    message: "Invalid email. Please, check you enter",
  }),
});
type FormData = yup.InferType<typeof schema>;

export const UserUpdateModal: FC<IUserModalProps> = ({ user }) => {
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [avatar, setAvatar] = useState(user.avatar);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: FormData) => {
    // dispatch(addContact(data));
    // modalClose();
  };
  const handleChange = (value: string) => {
    if (!nameRegEx.test(value)) {
      setIsValidName(false);
      return;
    }
    setIsValidName(true);
  };

  const handleEmailChange = (value: string) => {
    if (!emailPattern.test(value)) {
      setIsValidEmail(false);
      return;
    }
    setIsValidEmail(true);
  };

  return (
    <UserForm autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
      <div
        style={{
          position: "relative",
          height: "45px",
        }}
      >
        <UserAvatar
          alt="User avatar"
          src={user.avatar}
          style={{ width: "45px", height: "45px" }}
        />
        <CustomFileInput />
        <BiPlusCircle
          color="#fff"
          size={16}
          style={{ position: "absolute", right: "-1px", bottom: "-3px" }}
        />
      </div>
      <UserFormLabel htmlFor="name">
        Name
        <UserFormStyledField
          style={{
            outline: isValidName ? "" : "1px solid red",
          }}
          type="text"
          placeholder={user.name?.toString()}
          defaultValue=""
          {...register("name", {
            onChange: (e) => handleChange(e.target.value),
          })}
        />
        {errors?.name && <p>{errors.name.message}</p>}
      </UserFormLabel>

      <UserFormLabel htmlFor="number">
        Number
        <UserFormStyledField
          style={{
            outline: isValidEmail ? "" : "1px solid red",
          }}
          type="mail"
          placeholder="example@mail.com"
          defaultValue=""
          {...register("email", {
            onChange: (e) => handleEmailChange(e.target.value),
          })}
        />
        {errors?.email && <p>{errors.email.message}</p>}
      </UserFormLabel>
      <UserFormSubmitButton type="submit">Update</UserFormSubmitButton>
    </UserForm>
  );
};
