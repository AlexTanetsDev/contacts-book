import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar } from "../components/appBar/AppBar";
import styled from "styled-components";

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

const Container = styled.div`
  padding: 85px 10px 10px 10px;

  @media screen and (min-width: 450px) {
    padding: 75px 15px 20px 15px;
  }
`;
