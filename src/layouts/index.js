import * as React from "react";
//import styled from "styled-components";
import Navigation from "../components/Navigation/Navigation";
import GlobalStyle from "../assets/styles/globalStyles";

const MainLayout = ({ children }) => {
  return (
    <>
        <GlobalStyle />
        <Navigation />
        { children }
    </>
  )
}

export default MainLayout;
