import "./App.css";
import Game from "./components/Game";
import Intro from "./components/Intro";
import { useState } from "react";

function App() {
  const [startGame, setStartGame] = useState<boolean>(false);

  return <>{!startGame ? <Intro setStartGame={setStartGame} /> : <Game />}</>;
}

export default App;
