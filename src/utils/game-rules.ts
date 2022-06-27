import { Entities } from "../interfaces";

const TIE = "TIE";

export const GAME_RULES = {
  [`${Entities.ROCK}+${Entities.PAPER}`]: Entities.PAPER,
  [`${Entities.ROCK}+${Entities.SCISSORS}`]: Entities.ROCK,
  [`${Entities.SCISSORS}+${Entities.PAPER}`]: Entities.SCISSORS,
};

export function computeResult(status: [string, string]) {
  const entityA = status[0];
  const entityB = status[1];

  if (GAME_RULES[entityA + entityB]) return GAME_RULES[entityA + entityB];
  else if (GAME_RULES[entityB + entityA]) return GAME_RULES[entityB + entityA];
  else return TIE;
}
