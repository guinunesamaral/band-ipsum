import React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export const Content = () => {
  return (
    <div style={styles.container}>
      <Header />
      <Main />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100vh",
    backgroundColor: "var(--grey-1)",
  },
};
