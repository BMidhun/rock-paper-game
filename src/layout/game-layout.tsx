import React, { ReactNode } from "react";
import { Button } from "../components";
import { TIE } from "../constants/game-entities";
import "./style.css";

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
        <Button onClick={goToMenu}>Menu</Button>
        {result.length ? <Button onClick={reset}>Reset Game</Button> : null}
      </nav>
      <div className="game">{children}</div>
      {result.length ? (
        <div className="result">
          {result === TIE ? "TIE GAME" : "WINNER:" + result}
        </div>
      ) : null}
    </div>
  );
}

export default GameLayout;
