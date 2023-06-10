import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { FC, ReactElement } from "react";

interface IPrivateRouteProps {
  component: ReactElement | null;
  redirectTo?: string;
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
