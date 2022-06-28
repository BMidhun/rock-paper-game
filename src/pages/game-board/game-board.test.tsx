import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { MODE_COMVSCOM, MODE_PLVSCOM } from "../../constants/game-entities";
import GameBoard from "./index";

describe("player vs com", () => {
  const goToMenu = jest.fn();
  test("show player options", () => {
    render(<GameBoard gameMode={MODE_PLVSCOM} goToMenu={goToMenu} />);
    const list = screen.getAllByRole("listitem");
    expect(list).toHaveLength(3);
  });

  test("player vs com game has reset button when a round completes", () => {
    render(<GameBoard gameMode={MODE_PLVSCOM} goToMenu={goToMenu} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons[1]).toHaveTextContent(/rock/i);
    const rockBtn = buttons[1];
    fireEvent.click(rockBtn);

    expect(screen.getByText(/Reset Game/i)).toBeInTheDocument();
  });

  test("player vs com, after reset game check options are not disabled", () => {
    render(<GameBoard gameMode={MODE_PLVSCOM} goToMenu={goToMenu} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons[1]).toHaveTextContent(/rock/i);
    const rockBtn = buttons[1];
    fireEvent.click(rockBtn);

    const resetBtn = screen.getByText(/reset game/i);

    expect(rockBtn).toBeDisabled();

    fireEvent.click(resetBtn);

    expect(rockBtn).toBeEnabled();
  });
});

describe("com vs com", () => {
  const goToMenu = jest.fn();
  test("show result on initial render", () => {
    render(<GameBoard gameMode={MODE_COMVSCOM} goToMenu={goToMenu} />);
    const result = screen.getByTestId("result");
    expect(result).toBeInTheDocument();
  });
  test("when reset game is pressed", async () => {
    render(<GameBoard gameMode={MODE_COMVSCOM} goToMenu={goToMenu} />);
    const resetBtn = screen.getByText(/reset game/i);
    expect(resetBtn).toBeInTheDocument();

    fireEvent.click(resetBtn);

    await waitFor(async () => {
      expect(await screen.findByTestId("player-choice")).toHaveTextContent(
        /[A-Z]+/i
      );
    });
  });
});
