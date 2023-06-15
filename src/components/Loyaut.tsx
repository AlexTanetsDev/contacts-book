import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar } from "../components/appBar/AppBar";
import styled from "styled-components";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../hooks";
import { Oval } from "react-loader-spinner";

export const Layout = () => {
  const { isRefreshing } = useAuth();
  return (
    <Container>
      <AppBar />
      <div>
        <Toaster />
      </div>

      {isRefreshing ? (
        <Spiner>
          <Oval
            height={80}
            width={80}
            color="#60b8ff"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#a9d7fd"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
        </Spiner>
      ) : (
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 85px 10px 10px 10px;

  @media screen and (min-width: 450px) {
    padding: 75px 15px 20px 15px;
  }
`;

const Spiner = styled.div`
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 450px) {
    margin-top: 150px;
  }
`;
