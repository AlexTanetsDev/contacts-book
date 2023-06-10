import { useAuth } from "../../hooks";
import { StyledLink, StyledNav } from "./Navigation.styled";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </StyledNav>
  );
};
