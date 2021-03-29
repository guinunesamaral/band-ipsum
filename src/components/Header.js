import React from "react";

export const Header = () => {
  return (
    <div style={styles.container}>
      <h1 style={{ marginBottom: "10px" }}>Band Ipsum</h1>
      <p style={{ fontSize: "19px" }}>Your Lorem Ipsum of bands</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    margin: "40px auto 0 auto",
    padding: "10px",
  },
};
