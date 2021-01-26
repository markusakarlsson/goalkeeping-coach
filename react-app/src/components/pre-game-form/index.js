import React, { useState } from "react";
import "./style.scss";
import { useHistory } from "react-router-dom";

function PreGameForm({ preGameInfo }) {
  const [date, setDate] = useState("");
  const [match, setMatch] = useState("");
//   const [goalkeeper, setGoalkeeper] = useState("");
//   const [homeTeam, setHomeTeam] = useState("");
//   const [awayTeam, setAwayTeam] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    preGameInfo([date, match]);
    console.log(date, match);
    history.push("/game");
    e.preventDefault();
  };
  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Pre-Game</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label htmlFor="gameDate">Game Date</label>
          <br />

          <input
            type="date"
            id="gameDate"
            name="gameDate"
            min="2021-01-01"
            max="2021-12-31"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label htmlFor="game">Game Info</label>
          <br />
          <input
            type="text"
            id="game"
            name="game"
            placeholder="Game"
            onChange={(e) => setMatch(e.target.value)}
            value={" " + match}
          />

          <br />
          {/* <input
            type="text"
            id="goalie"
            name="goalie"
            placeholder="Goalkeeper"
            onChange={(e) => setGoalkeeper(e.target.value)}
            value={goalkeeper}
          />

          <br />
          <label htmlFor="match">Match </label>
          <br />
          <input
            type="text"
            id="match"
            name="homeTeam"
            placeholder="Home team"
            onChange={(e) => setHomeTeam(e.target.value)}
            value={homeTeam}
          />
          <p> - </p>
          <input
            type="text"
            id="match"
            name="awayTeam"
            placeholder="Away team"
            onChange={(e) => setAwayTeam(e.target.value)}
            value={awayTeam}
          />
          <br /> */}
          <input type="submit" value="Face-Off!" />
        </form>
      </div>
    </div>
  );
}

export default PreGameForm;
