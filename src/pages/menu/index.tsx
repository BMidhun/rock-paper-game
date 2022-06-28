import React from "react";
import { Button } from "../../components";
import { MODE_COMVSCOM, MODE_PLVSCOM } from "../../constants/game-entities";
import { COMVSCOM, PLVSCOM } from "../../interfaces";
import "./style.css";

interface IProps {
  selectGameMode: (mode: PLVSCOM | COMVSCOM) => void;
}

function Menu({ selectGameMode }: IProps) {
  return (
    <div className="menu">
      <h1>Rock-Paper-Scissors Game</h1>
      <h3>Choose your game mode</h3>
      <ul className="menu-mode">
        <li>
          <Button
            onClick={() => {
              selectGameMode(MODE_PLVSCOM);
            }}
          >
            PLAYER vs COM
          </Button>
        </li>
        <li>
          <Button onClick={() => selectGameMode(MODE_COMVSCOM)}>
            COM VS COM
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
