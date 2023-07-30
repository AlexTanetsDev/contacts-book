import { GlobalStyles } from "./utils/globalStyles";
import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";

import { Layout } from "./components/Loyaut";
import { RestrictedRoute } from "./utils/RestrictedRoute";
import { refreshUser } from "./redux/auth/operators";
import { useAppDispatch } from "./hooks";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
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
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </>
  );
};
