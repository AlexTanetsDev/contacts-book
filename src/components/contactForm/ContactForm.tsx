import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  ContactsForm,
  FormLabel,
  StyledField,
  SubmitButton,
} from "./ContactForm.styled";
import * as yup from "yup";
import { useAppDispatch } from "../../hooks";
import { addContact } from "../../redux/contacts/operations";
import { IContact } from "../../redux/contacts/contactSlice";

interface IContactFormProps {
  modalClose: () => void;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().positive().integer(),
});

export const ContactForm: FC<IContactFormProps> = ({ modalClose }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IContact>();

  const handleFormSubmit: SubmitHandler<IContact> = (data) => {
    console.log(data);
    // dispatch(addContact(data));
    // modalClose();
  };
  return (
    <ContactsForm autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
      <FormLabel htmlFor="name">
        Name
        <StyledField
          type="text"
          placeholder="Contact Name"
          defaultValue=""
          {...register("name")}
        />
        {errors.name && <span>This field is required</span>}
      </FormLabel>

      <FormLabel htmlFor="number">
        Number
        <StyledField
          type="tel"
          placeholder="011 22 33 44"
          defaultValue=""
          {...register("number")}
        />
        {errors.number && <span>This field is required</span>}
      </FormLabel>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </ContactsForm>
  );
};
