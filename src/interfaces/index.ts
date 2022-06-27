export interface IGameEntity {
  name: string;
  imgSrc?: string;
}

export enum Entities {
  ROCK = "ROCK",
  PAPER = "PAPER",
  SCISSORS = "SCISSORS",
}

export type PLVSCOM = "PLVSCOM";
export type COMVSCOM = "COMVSCOM";
