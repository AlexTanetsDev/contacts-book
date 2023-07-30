import { useAuth } from "../../hooks";
import { StyledLink, StyledNav } from "./Navigation.styled";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledNav>
      <StyledLink to="/" reloadDocument>
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts" reloadDocument>
          Contacts
        </StyledLink>
      )}
    </StyledNav>
  );
};
