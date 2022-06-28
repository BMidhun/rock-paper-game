import { useEffect } from "react";
import { getRandomEntity } from "../../../utils/game-rules";

interface IProps {
  playerSelection: string;
  onComSelect: (choice: string) => void;
  selectedChoice: string;
}

function ComputerBoard({
  playerSelection,
  onComSelect,
  selectedChoice,
}: IProps) {
  useEffect(() => {
    if (playerSelection.length) {
      onComSelect(getRandomEntity().name);
    }
  }, [playerSelection, onComSelect]);

  return (
    <div className="player">
      <h3>Computer</h3>
      <h2 className="selected_entity" data-testid="com-choice">
        {selectedChoice}
      </h2>
    </div>
  );
}

export default ComputerBoard;
