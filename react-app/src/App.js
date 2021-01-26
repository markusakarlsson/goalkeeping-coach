import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import PreGameForm from "./components/pre-game-form";
import HockeyboardSketch from "./components/hockeyboard";

function App(props) {
  const [preGames, setPreGames] = useState([]);
  const preGameInfo = (info) => {
    let infos = [...preGames, info];
    setPreGames(infos);
  };

  return (
    <>
      <Router>
        <Header />
        <Route exact path="/">
          <PreGameForm preGameInfo={preGameInfo} />
        </Route>
        <Route exact path="/game">
          <HockeyboardSketch games={preGames} />
        </Route>
      </Router>
    </>
  );
}

export default App;
