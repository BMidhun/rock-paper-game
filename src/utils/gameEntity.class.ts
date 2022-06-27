import { IGameEntity } from "../interfaces";

export class GameEntity implements IGameEntity {
  name: string;
  imgSrc?: string;

  constructor(name: string, imgSrc?: string) {
    this.name = name;
    this.imgSrc = imgSrc;
  }
}
