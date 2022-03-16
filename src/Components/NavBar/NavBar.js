import React from "react";
import { Header } from "./NavBar.styled";

const NavBar = () => {
  return (
    <Header style={{ height: "5rem", background: "#0080B2" }}>
      <nav>
        <h1>Desempenho das lojas</h1>
      </nav>
    </Header>
  );
};

export default NavBar;
