import {
  GreetingTag,
  GreetingTitle,
  GreetingWraper,
} from "../greetingBox/GreetingBox.styled";
import {
  AddContactBox,
  AddContactBtn,
  ContactInfoWrapper,
  ContactsInfo,
  HomeViewTitleBox,
} from "./HomeView.styled";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { Modal } from "../modal/Modal";

export const HomeView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <GreetingWraper>
      <HomeViewTitleBox>
        <GreetingTitle>Phonebook</GreetingTitle>
        <GreetingTag>
          All your contacts in one app <br /> on any device!
        </GreetingTag>
      </HomeViewTitleBox>

      <AddContactBox>
        <ContactInfoWrapper>
          <FaUserAlt color="#000000b9" size={50} />
          <ContactsInfo>You can add new contacts here</ContactsInfo>
        </ContactInfoWrapper>

        <AddContactBtn type="button" onClick={toggleModal}>
          Add contact
        </AddContactBtn>
      </AddContactBox>
      {isModalOpen && <Modal modalClose={toggleModal} />}
    </GreetingWraper>
  );
};
