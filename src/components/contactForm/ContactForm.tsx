import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ContactsForm,
  FormLabel,
  StyledField,
  SubmitButton,
} from "./ContactForm.styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../hooks";
import { addContact } from "../../redux/contacts/operations";

interface IContactFormProps {
  modalClose: () => void;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(1, "Name can't be empty")
    .matches(/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/, {
      message: "Name can include only letterrs, numbers, '-'",
    }),
  number: yup
    .string()
    .required()
    .matches(
      /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{2,4}[-\s.]{0,1}[0-9]{2,4}$/,
      { message: "This is not valid tel. Phone number must be 10 integer " }
    ),
});
type FormData = yup.InferType<typeof schema>;

export const ContactForm: FC<IContactFormProps> = ({ modalClose }) => {
  const [isValidName, setIsValidName] = useState(true);
  const [isValidTel, setIsValidTel] = useState(true);
  const dispatch = useAppDispatch();
  const telRegEx =
    /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{2,4}[-\s.]{0,1}[0-9]{2,4}$/;
  const nameRegEx = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: FormData) => {
    dispatch(addContact(data));
    modalClose();
  };

  const handleChange = (value: string) => {
    if (!nameRegEx.test(value)) {
      setIsValidName(false);
      return;
    }
    setIsValidName(true);
  };

  const handleTelChange = (value: string) => {
    if (!telRegEx.test(value)) {
      setIsValidTel(false);
      return;
    }
    setIsValidTel(true);
  };
  return (
    <ContactsForm autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
      <FormLabel htmlFor="name">
        Name
        <StyledField
          type="text"
          placeholder="Contact Name"
          defaultValue=""
          {...register("name", {
            onChange: (e) => handleChange(e.target.value),
          })}
        />
        {errors.name && <span>This field is required</span>}
      </FormLabel>

      <FormLabel htmlFor="number">
        Number
        <StyledField
          type="tel"
          placeholder="011 22 33 44"
          defaultValue=""
          {...register("number", {
            onChange: (e) => handleTelChange(e.target.value),
          })}
        />
        {errors.number && <span>This field is required</span>}
      </FormLabel>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </ContactsForm>
  );
};
