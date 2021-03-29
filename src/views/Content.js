import React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export const Content = () => {
  return (
    <div style={styles.container}>
      <Header />
      <Main />
      <Footer />
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
