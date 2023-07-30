import {
  FaTelegram,
  FaCommentDots,
  FaEnvelope,
  FaPhone,
  FaUserAlt,
} from "react-icons/fa";
import {
  GreetingBtn,
  GreetingBtnBox,
  GreetingTag,
  GreetingTitle,
  GreetingWraper,
  IconBox,
  TitleBox,
} from "./GreetingBox.styled";

export const GreetingBox = () => {
  return (
    <GreetingWraper>
      <TitleBox>
        <GreetingTitle>Welcome to the Phonebook!</GreetingTitle>
        <GreetingTag>
          All your contacts in one app <br /> on any device!
        </GreetingTag>
      </TitleBox>
      <IconBox>
        <FaEnvelope color="#000000b9" size={25} />
        <FaCommentDots color="#000000b9" size={25} />
        <FaPhone color="#000000b9" size={25} />
        <FaTelegram color="#000000b9" size={25} />
        <FaUserAlt color="#000000b9" size={25} />
      </IconBox>

      <GreetingBtnBox>
        <GreetingBtn to="/login" reloadDocument>
          Sing in
        </GreetingBtn>
        <GreetingBtn to="/register" reloadDocument>
          Register
        </GreetingBtn>
      </GreetingBtnBox>
    </GreetingWraper>
  );
};
