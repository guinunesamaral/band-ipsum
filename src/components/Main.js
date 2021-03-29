import React from "react";

const Options = () => {
  return (
    <div className="header" style={styles.options}>
      <div className="header__band" style={styles.headerCpn}>
        <p>Band: </p>
        <select name="bands" id="bands">
          <option value="paramore">Paramore</option>
          <option value="blink-182">blink-182</option>
          <option value="falling-in-reverse">Falling In Reverse</option>
          <option value="bmth">Bring Me The Horizon</option>
        </select>
      </div>
      <div className="header__nbr-pgr" style={styles.headerCpn}>
        <p>Nbr. paragraphs: </p>
        <select name="nbr-pgr" id="nbr-pgr">
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="1" selected>
            3
          </option>
          <option value="1">4</option>
          <option value="1">5</option>
          <option value="1">6</option>
          <option value="1">7</option>
          <option value="1">8</option>
        </select>
      </div>
    </div>
  );
};

const TextGenerated = () => {
  return (
    <div style={styles.text}>
      <p style={styles.textParagraph}>
        Let's fuck till the sun comes up. 'Cause we haven't got long but we got
        enough. A night to remember, a day to forget. Don't stop till we
        pirouette. I'm no saint, you're no martyr. One more night playin' heart
        piñata. How do you say goodbye?
      </p>
      <p style={styles.textParagraph}>
        How do you say goodbye when you've hardly said hello? The only way we
        know, the only way we know. The only way we know, the only way we know.
        How do you say goodbye when you've hardly said hello?
      </p>
      <p style={styles.textParagraph}>
        Oh, let's fuck, fuck, fuck, fuck, fuck. Let's fuck till our hearts give
        up, it won't be long. A night to remember, a day to forget. If our eyes
        were diamonds, we'd be rich. Your voice makes my heart skip beats. So
        keep quiet 'fore it quits on me. Your voice makes my heart skip beats.
        So keep quiet before it flatlines. Before it flatlines
      </p>
    </div>
  );
};

export const Main = () => {
  return (
    <div style={styles.container}>
      <Options />
      <TextGenerated />
    </div>
  );
};

const styles = {
  options: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2% 5%",
    backgroundColor: "var(--grey-2)",
  },
  headerCpn: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    padding: "13px 15px 0 15px",
  },
  textParagraph: {
    lineHeight: "23px",
    textAlign: "justify",
    marginBottom: "10px",
  },
  container: {
    width: "90%",
    margin: "0 auto",
    backgroundColor: "var(--grey-1)",
    border: "1px solid var(--grey-4)",
  },
};
