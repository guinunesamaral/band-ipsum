import React from "react";
import Icon from "../images/logo.png";

export const Header = ({ usingBackground }) => {
  return (
    <>
      {!usingBackground ? (
        <div style={styles.container}>
          <img src={Icon} alt="page-icon" style={styles.icon} />
          <p style={{ fontSize: "19px" }}>Your Lorem Ipsum of bands</p>
        </div>
      ) : (
        <div style={{ ...styles.container, margin: "0 auto" }}>
          <img src={Icon} alt="page-icon" style={styles.icon} />
          <p style={{ fontSize: "19px" }}>Your Lorem Ipsum of bands</p>
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    margin: "15px auto 20px auto",
  },
  icon: {
    width: "50px",
    height: "50px",
    marginRight: "15px",
  },
};
