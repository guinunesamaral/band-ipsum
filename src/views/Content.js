import React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import AlbumCover from "../images/riot.jpg";

/**
 * TODO: Fix the band option size, it's too big to fit in the select input size
 */

export const Content = ({ useBackground }) => {
  return (
    <>
      {!useBackground ? (
        <div style={styles.container}>
          <Header usingBackground={false} />
          <Main />
        </div>
      ) : (
        <div style={styles.album}>
          <div style={styles.overlay}></div>
          <div style={styles.containerAlternative}>
            <Header usingBackground={true} />
            <Main />
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    backgroundColor: "var(--grey-1)",
  },
  containerAlternative: {
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    opacity: "0.4",
    backgroundColor: "var(--grey-1)",
  },
  album: {
    position: "relative",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${AlbumCover})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};
