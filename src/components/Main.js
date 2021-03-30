import React from "react";
import "./Main.css";

const Options = () => {
  return (
    <div className="header">
      <div className="header__band">
        <p>Band: </p>
        <select name="bands" id="bands" className="header__select band__select">
          <option value="paramore">Paramore</option>
          <option value="blink-182">blink-182</option>
          <option value="falling-in-reverse">Falling In Reverse</option>
          <option value="bmth">Bring Me The Horizon</option>
        </select>
      </div>
      <div className="header__nbrParagraphs">
        <p>Nbr. paragraphs: </p>
        <select
          name="nbr-pgr"
          id="nbr-pgr"
          className="header__select nbrParagraphs__select"
        >
          <option value="3" defaultValue>
            3
          </option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
};

const TextGenerated = () => {
  return (
    <div className="text">
      <p className="text__paragraph">
        Let's fuck till the sun comes up. 'Cause we haven't got long but we got
        enough. A night to remember, a day to forget. Don't stop till we
        pirouette. I'm no saint, you're no martyr. One more night playin' heart
        piñata. How do you say goodbye?
      </p>
      <p className="text__paragraph">
        How do you say goodbye when you've hardly said hello? The only way we
        know, the only way we know. The only way we know, the only way we know.
        How do you say goodbye when you've hardly said hello?
      </p>
      <p className="text__paragraph">
        Oh, let's fuck, fuck, fuck, fuck, fuck. Let's fuck till our hearts give
        up, it won't be long. A night to remember, a day to forget. If our eyes
        were diamonds, we'd be rich. Your voice makes my heart skip beats. So
        keep quiet 'fore it quits on me. Your voice makes my heart skip beats.
        So keep quiet before it flatlines. Before it flatlines
      </p>
      <p className="text__paragraph">
        Oh, let's fuck, fuck, fuck, fuck, fuck. Let's fuck till our hearts give
        up, it won't be long. A night to remember, a day to forget. If our eyes
        were diamonds, we'd be rich. Your voice makes my heart skip beats. So
        keep quiet 'fore it quits on me. Your voice makes my heart skip beats.
        So keep quiet before it flatlines. Before it flatlines
      </p>
      <p className="text__paragraph">
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
    <div className="container">
      <Options />
      <TextGenerated />
    </div>
  );
};
