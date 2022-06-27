import React, { useState } from "react";
import { GameEntities, MODE_PLVSCOM } from "../../constants/game-entities";
import { COMVSCOM, PLVSCOM } from "../../interfaces";
import GameLayout from "../../layout/game-layout";
import { computeResult } from "../../utils/game-rules";
import ComputerBoard from "./components/computer-board";
import PlayerBoard from "./components/player-board";

interface IProps {
  gameMode: PLVSCOM | COMVSCOM;
  goToMenu: () => void;
}

function GameBoard({ gameMode, goToMenu }: IProps) {
  const [gameStatus, setGameStatus] = useState({ 0: "", 1: "" });
  const [hasGameCompleted, setHasGameCompleted] = useState(false);

  function onGameComplete() {
    computeResult([gameStatus[0], gameStatus[1]]);
  }

  function playAgain() {
    setGameStatus({ 0: "", 1: "" });
    setHasGameCompleted(false);
  }

  return (
    <>
      <GameLayout
        goToMenu={goToMenu}
        hasGameCompleted={hasGameCompleted}
        playAgain={playAgain}
      >
        <PlayerBoard gameMode={gameMode} />
        <div>
          <h3>VS</h3>
        </div>
        <ComputerBoard />
      </GameLayout>
    </>
  );
}

export default GameBoard;
