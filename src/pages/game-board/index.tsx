import { COMVSCOM, PLVSCOM } from "../../interfaces";
import GameLayout from "../../layout/game-layout";
import ComputerBoard from "./components/computer-board";
import PlayerBoard from "./components/player-board";

interface IProps {
  gameMode: PLVSCOM | COMVSCOM;
  goToMenu: () => void;
}

function GameBoard({ gameMode, goToMenu }: IProps) {
  return (
    <GameLayout goToMenu={goToMenu}>
      <PlayerBoard gameMode={gameMode} />
      <div>
        <h3>VS</h3>
      </div>
      <ComputerBoard />
    </GameLayout>
  );
}

export default GameBoard;
