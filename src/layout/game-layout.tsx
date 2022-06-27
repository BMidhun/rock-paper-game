import React, { ReactNode } from "react";

interface IProps {
  goToMenu: () => void;
  children: ReactNode;
  hasGameCompleted: boolean;
  playAgain: () => void;
}

function GameLayout({
  goToMenu,
  children,
  hasGameCompleted,
  playAgain,
}: IProps) {
  return (
    <div className="board-layout">
      <nav>
        <button onClick={goToMenu}>Menu</button>
      </nav>
      <div className="game">{children}</div>
      <div className="game-result"></div>
      {hasGameCompleted && (
        <div>
          <button onClick={playAgain}>Play Again</button>
        </div>
      )}{" "}
    </div>
  );
}

export default GameLayout;
