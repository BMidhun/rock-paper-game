import { useCallback, useEffect, useState } from "react";
import { MODE_COMVSCOM } from "../../constants/game-entities";
import { COMVSCOM, PLVSCOM } from "../../interfaces";
import GameLayout from "../../layout/game-layout";
import { computeResult, getRandomEntity } from "../../utils/game-rules";
import ComputerBoard from "./components/computer-board";
import PlayerBoard from "./components/player-board";

interface IProps {
  gameMode: PLVSCOM | COMVSCOM;
  goToMenu: () => void;
}

function GameBoard({ gameMode, goToMenu }: IProps) {
  const [playerSelection, setPlayerSelection] = useState<string>("");
  const [comSelection, setComSelection] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const onPlayerSelect = useCallback(
    (choice: string) => {
      setPlayerSelection(choice);
    },
    [setPlayerSelection]
  );

  const onComSelect = useCallback(
    (choice: string) => {
      setComSelection(choice);
    },
    [setComSelection]
  );

  function playAgain() {
    setPlayerSelection("");
    setComSelection("");
    setResult("");

    // To avoid playerSelection to randomly have the same state as the previous state, opted to add a timeout to pick the random entity
    // (Applicable only in mode COM VS COM)
    if (gameMode === MODE_COMVSCOM) {
      setTimeout(() => {
        setPlayerSelection(getRandomEntity().name);
      }, 0);
    }
  }

  useEffect(() => {
    // Assuming Computer Board being the last player to complete the round.
    if (comSelection.length) {
      const res = computeResult([playerSelection, comSelection]);
      setResult(res);
    }
  }, [comSelection, playerSelection]);

  return (
    <GameLayout goToMenu={goToMenu} playAgain={playAgain} result={result}>
      <PlayerBoard
        gameMode={gameMode}
        onPlayerSelect={onPlayerSelect}
        selectedChoice={playerSelection}
        shouldDisable={!!comSelection}
      />
      <ComputerBoard
        playerSelection={playerSelection}
        onComSelect={onComSelect}
        selectedChoice={comSelection}
      />
    </GameLayout>
  );
}

export default GameBoard;
