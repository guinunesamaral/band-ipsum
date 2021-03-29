import React from "react";

export const Footer = () => {
  return (
    <div style={styles.footer}>
      <p>Guilherme Nunes ~ 2021</p>
    </div>
  );
};

const styles = {
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "var(--grey-2)",
  },
};
