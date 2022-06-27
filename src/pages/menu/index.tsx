import React from "react";
import { MODE_COMVSCOM, MODE_PLVSCOM } from "../../constants/game-entities";
import { COMVSCOM, PLVSCOM } from "../../interfaces";

interface IProps {
  selectGameMode: (mode: PLVSCOM | COMVSCOM) => void;
}

function Menu({ selectGameMode }: IProps) {
  return (
    <div className="menu">
      <h1>Welcome to Rock-Paper-Scissors Game</h1>
      <h3>Choose your game mode</h3>
      <ul className="menu-mode">
        <li>
          <button
            onClick={() => {
              selectGameMode(MODE_PLVSCOM);
            }}
          >
            PL vs COM
          </button>
        </li>
        <li>
          <button onClick={() => selectGameMode(MODE_COMVSCOM)}>
            COM VS COM
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
