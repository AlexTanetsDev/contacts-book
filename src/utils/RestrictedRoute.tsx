import { FC, ReactElement } from "react";
import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";

interface IRestrictedRouteProps {
  component: ReactElement | null;
  redirectTo?: string;
}

export const RestrictedRoute: FC<IRestrictedRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
