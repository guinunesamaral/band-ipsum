import React from "react";
import AlbumCover from "../images/riot.jpg";

export const Album = () => {
  return (
    <>
      <img src={AlbumCover} alt="album-cover" style={styles.img} />
    </>
  );
};

const styles = {
  img: {
    width: "100%",
    height: "100vh",
  },
};
