import React from "react";
import styled from "styled-components";
import SideNav from "../components/Generics/SideNav";
// import Calendar from "../pages/Calendar";
import Routing from "./Routing";

function App() {
  const visibleNavBar = false;
  return (
    <>
      {visibleNavBar ? (
        <ContainerGrid>
          <SideNav />
          <Routing />
        </ContainerGrid>
      ) : (
        <ContainerOnePage>
          <Routing />
        </ContainerOnePage>
      )}
    </>
  );
}

const ContainerGrid = styled.main`
  display: grid;
  width: 100%;
  grid-template-columns: 20% 80%;
`;
const ContainerOnePage = styled.main`
  display: initial;
`;

export default App;
