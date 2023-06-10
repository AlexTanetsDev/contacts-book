import { GlobalStyles } from "./utils/globalStyles";
import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Loyaut";
import { PrivateRoute } from "./utils/PrivateRoute";
import { RestrictedRoute } from "./utils/RestrictedRoute";
import { refreshUser } from "./redux/auth/operators";
import { useAppDispatch, useAuth } from "./hooks";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));

export const App = () => {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
