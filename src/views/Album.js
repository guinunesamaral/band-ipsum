import React from "react";
import Riot from "../images/riot.jpg";

export const Album = () => {
  return (
    <>
      <img src={Riot} alt="Riot" style={styles.img} />
    </>
  );
};

const styles = {
  img: {
    width: "100%",
    height: "100vh",
  },
};
