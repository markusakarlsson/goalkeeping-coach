import React, { useState } from "react";
import "./style.scss";
import { useHistory } from "react-router-dom";
import SportsHockeyIcon from '@material-ui/icons/SportsHockey';

function PreGameForm({ preGameInfo }) {
  const [date, setDate] = useState("");
  const [match, setMatch] = useState("");
  const [goalkeeper, setGoalkeeper] = useState("");
  const seperator = " "
//   const [homeTeam, setHomeTeam] = useState("");
//   const [awayTeam, setAwayTeam] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    preGameInfo([date, seperator, match]);
    console.log(date, match);
    history.push("/game");
    e.preventDefault();
  };
  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Pre-Game</h1>
        <p className="instructions">Please fill in form before start of game</p>
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
          {/* <label htmlFor="match">Match </label>
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
          <input id="faceOffButton" type="submit" value="Face-Off!"/>
        </form>
      </div>
    </div>
  );
}

export default PreGameForm;
