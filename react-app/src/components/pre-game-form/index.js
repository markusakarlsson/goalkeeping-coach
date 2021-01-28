import React, { useState } from "react";
import "./style.scss";
import { useHistory } from "react-router-dom";

function PreGameForm({ preGameInfo }) {
  const [date, setDate] = useState("");
  const [match, setMatch] = useState("");
  const [goalkeeper, setGoalkeeper] = useState("");
  const seperator = " ";
  const history = useHistory();

  const handleSubmit = (e) => {
    preGameInfo([date, seperator, match]);
    history.push("/game");
    e.preventDefault();
  };
  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Pre-Game</h1>
        <p className="instructions">
          Please fill in form before the game starts
        </p>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label htmlFor="gameDate">Game Date</label>
          <br />

          <input
            required="true"
            type="date"
            id="gameDate"
            name="gameDate"
            placeholder="Pick a date"
            min="2021-01-01"
            max="2021-12-31"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label htmlFor="match">Game Info</label>
          <br />
          <input
            required="true"
            type="text"
            id="match"
            name="match"
            placeholder="Home team - Away team"
            onChange={(e) => setMatch(e.target.value)}
            value={match}
          />

          <br />
          <label htmlFor="goalkeeper">Goalkeeper</label>
          <br />
          <input
            required="true"
            type="text"
            id="goalkeeper"
            name="goalkeeper"
            placeholder="Name"
            onChange={(e) => setGoalkeeper(e.target.value)}
            value={goalkeeper}
          />

          <br />

          <input id="faceOffButton" type="submit" value="Face-Off!" />
        </form>
      </div>
    </div>
  );
}

export default PreGameForm;
