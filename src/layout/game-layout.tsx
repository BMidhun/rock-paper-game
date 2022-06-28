import React, { ReactNode } from "react";
import { TIE } from "../constants/game-entities";

interface IProps {
  goToMenu: () => void;
  children: ReactNode;
  reset: () => void;
  result: string;
}

function GameLayout({ goToMenu, children, reset, result }: IProps) {
  return (
    <div className="board-layout">
      <nav>
        <button onClick={goToMenu}>Menu</button>
      </nav>
      <div className="game">{children}</div>
      <div className="result">{result === TIE ? TIE : result}</div>
      {result.length ? (
        <div>
          <button onClick={reset}>Reset Game</button>
        </div>
      ) : null}
    </div>
  );
}

export default GameLayout;
