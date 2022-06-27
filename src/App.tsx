import { useState } from "react";
import "./App.css";
import { COMVSCOM, PLVSCOM } from "./interfaces";

function App() {
  const [gameMode, setGameMode] = useState<PLVSCOM | COMVSCOM | null>(null);

  if (!gameMode) {
    return <div>Menu</div>;
  } else return <div>Game</div>;
}

export default App;
