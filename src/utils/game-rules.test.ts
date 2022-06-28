import React from "react";
import { TIE } from "../constants/game-entities";
import { Entities } from "../interfaces";
import { computeResult } from "./game-rules";

describe("game rules", () => {
  test("if result yields a winner", () => {
    const res = computeResult([Entities.ROCK, Entities.PAPER]);
    expect(res).toBe(Entities.PAPER);
  });

  test("if result is a tie", () => {
    const res = computeResult([Entities.PAPER, Entities.PAPER]);
    expect(res).toBe(TIE);
  });
});
