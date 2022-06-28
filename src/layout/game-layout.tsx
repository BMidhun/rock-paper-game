import React, { ReactNode } from "react";

interface IProps {
  goToMenu: () => void;
  children: ReactNode;
}

function GameLayout({ goToMenu, children }: IProps) {
  return (
    <div className="board-layout">
      <nav>
        <button onClick={goToMenu}>Menu</button>
      </nav>
      <div className="game">{children}</div>
    </div>
  );
}

export default GameLayout;
