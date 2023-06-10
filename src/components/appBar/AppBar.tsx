import { useAuth } from "../../hooks";
import { Navigation } from "../navigation/Navigation";
import { UserMenu } from "../userMenu/UserMenu";
import { StyledHeader } from "./AppBar.styled";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeader>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </StyledHeader>
  );
};
