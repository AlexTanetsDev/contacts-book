import { ContactForm } from "../contactForm/ContactForm";
import { GreetingWraper, IconBox } from "../greetingBox/GreetingBox.styled";
import { useEffect, FC } from "react";
import { createPortal } from "react-dom";
import { ModalCloseBtn, Overlay } from "./Modal.styled";
import {
  FaTelegram,
  FaCommentDots,
  FaEnvelope,
  FaPhone,
  FaUserAlt,
} from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const modalRoot = document.querySelector("#modal-root")!;

interface ImodalProps {
  modalClose: () => void;
}

export const Modal: FC<ImodalProps> = ({ modalClose }) => {
  useEffect(() => {
    const hendleKeydown = (e: { code: string }) => {
      if (e.code === "Escape") {
        modalClose();
      }
    };

    window.addEventListener("keydown", hendleKeydown);

    return () => {
      window.removeEventListener("keydown", hendleKeydown);
    };
  }, [modalClose]);

  const handleClick = (e: { target: { id: string } }) => {
    if (e.target.id !== "overlay") return;
    modalClose();
  };

  return createPortal(
    <Overlay onClick={() => handleClick} id="overlay">
      <GreetingWraper>
        <ModalCloseBtn type="button" onClick={modalClose}>
          <BsXLg size={30} />
        </ModalCloseBtn>
        <ContactForm modalClose={modalClose} />
        <IconBox>
          <FaEnvelope color="#000000b9" size={25} />
          <FaCommentDots color="#000000b9" size={25} />
          <FaPhone color="#000000b9" size={25} />
          <FaTelegram color="#000000b9" size={25} />
          <FaUserAlt color="#000000b9" size={25} />
        </IconBox>
      </GreetingWraper>
    </Overlay>,
    modalRoot
  );
};
