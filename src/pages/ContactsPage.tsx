import { useEffect, useState } from "react";
import {
  selectContacts,
  selectIsloading,
  selectError,
} from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import { Filter } from "../components/filter/filter";
import { ContactList } from "../components/contactList/ContactList";
import { GreetingWraper } from "../components/greetingBox/GreetingBox.styled";
import { AddContactBtn } from "../components/homeView/HomeView.styled";
import { Modal } from "../components/modal/Modal";
import { useAppDispatch, useAppSelector } from "../hooks";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function Contacts() {
  const contacts = useAppSelector(selectContacts);
  const isLoading = useAppSelector(selectIsloading);
  const error = useAppSelector(selectError);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <GreetingWraper>
      <h1>Phonebook</h1>
      {isLoading && !error ? (
        <Loader>
          <ThreeDots
            height="38"
            width="80"
            radius="9"
            color="#60b8ff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </Loader>
      ) : (
        <AddContactBtn type="button" onClick={toggleModal}>
          Add contact
        </AddContactBtn>
      )}

      {isModalOpen && <Modal modalClose={toggleModal} />}
      <h2 style={{ textAlign: "center" }}>
        {contacts.length === 0
          ? "Here will be your contacts. Add contacts"
          : "Contacts"}
      </h2>
      {contacts.length > 1 && <Filter />}

      {contacts.length !== 0 && <ContactList />}
    </GreetingWraper>
  );
}

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
