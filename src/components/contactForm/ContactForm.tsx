import { FC } from "react";
import { Formik, ErrorMessage } from "formik";
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

const initialValues: IContact = {
  name: "",
  number: "",
};

export const ContactForm: FC<IContactFormProps> = ({ modalClose }) => {
  const dispatch = useAppDispatch();

  const hendleSubmit = (values: IContact, { resetForm }: any) => {
    dispatch(addContact(values));
    resetForm();
    modalClose();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={hendleSubmit}
    >
      <ContactsForm autoComplete="off">
        <FormLabel htmlFor="name">
          Name
          <StyledField type="text" name="name" placeholder="Contact Name" />
          <ErrorMessage name="name" component="div" />
        </FormLabel>

        <FormLabel htmlFor="number">
          Number
          <StyledField type="tel" name="number" placeholder="011 22 33 44" />
          <ErrorMessage name="number" component="div" />
        </FormLabel>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </ContactsForm>
    </Formik>
  );
};
