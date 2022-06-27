import { useState } from "react";
import "./App.css";
import { COMVSCOM, PLVSCOM } from "./interfaces";
import GameBoard from "./pages/game-board";
import Menu from "./pages/menu";

function App() {
  const [gameMode, setGameMode] = useState<PLVSCOM | COMVSCOM | null>(null);

  function selectGameMode(mode: PLVSCOM | COMVSCOM) {
    setGameMode(mode);
  }

  if (!gameMode) {
    return <Menu selectGameMode={selectGameMode} />;
  } else
    return <GameBoard gameMode={gameMode} goToMenu={() => setGameMode(null)} />;
}

export default App;
