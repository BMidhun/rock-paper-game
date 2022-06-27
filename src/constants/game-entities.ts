import { Entities } from "../interfaces";
import { GameEntity } from "../utils/gameEntity.class";

const rock = new GameEntity(Entities.ROCK, "");
const paper = new GameEntity(Entities.PAPER, "");
const scissors = new GameEntity(Entities.SCISSORS, "");

export const GameEntities = [rock, paper, scissors];
