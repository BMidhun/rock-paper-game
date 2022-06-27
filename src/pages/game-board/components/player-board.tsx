import React from "react";
import { GameEntities, MODE_PLVSCOM } from "../../../constants/game-entities";
import { COMVSCOM, PLVSCOM } from "../../../interfaces";

interface IProps {
  gameMode: PLVSCOM | COMVSCOM;
}

function PlayerBoard({ gameMode }: IProps) {
  return (
    <div className="player">
      <h3>Player</h3>
      <div className="selected_entity">Selected Enity</div>
      {gameMode === MODE_PLVSCOM && (
        <ul className="player-options">
          {GameEntities.map((item) => {
            return (
              <li key={item.name}>
                <button>{item.name}</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default PlayerBoard;
