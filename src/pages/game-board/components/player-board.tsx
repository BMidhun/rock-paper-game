import { useEffect } from "react";
import { Button } from "../../../components";
import {
  GameEntities,
  MODE_COMVSCOM,
  MODE_PLVSCOM,
} from "../../../constants/game-entities";
import { COMVSCOM, PLVSCOM } from "../../../interfaces";
import { getRandomEntity } from "../../../utils/game-rules";

interface IProps {
  gameMode: PLVSCOM | COMVSCOM;
  onPlayerSelect: (choice: string) => void;
  selectedChoice: string;
  shouldDisable: boolean;
}

function PlayerBoard({
  gameMode,
  selectedChoice,
  onPlayerSelect,
  shouldDisable,
}: IProps) {
  useEffect(() => {
    if (gameMode === MODE_COMVSCOM) {
      onPlayerSelect(getRandomEntity().name);
    }
  }, [gameMode, onPlayerSelect]);

  return (
    <div className="player">
      <h3>{gameMode === MODE_PLVSCOM ? "Player" : "Computer"}</h3>
      <div className="selected_entity">{selectedChoice}</div>
      {gameMode === MODE_PLVSCOM && (
        <ul className="player-options">
          {GameEntities.map((item) => {
            return (
              <li key={item.name}>
                <Button
                  onClick={() => onPlayerSelect(item.name)}
                  disabled={shouldDisable}
                >
                  {item.name}
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default PlayerBoard;
