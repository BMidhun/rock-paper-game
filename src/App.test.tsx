import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders game title", () => {
  render(<App />);
  const heading = screen.getByText(/Rock-Paper-Scissors Game/i);
  expect(heading).toBeInTheDocument();
});

test("select player vs computer game", () => {
  render(<App />);
  const PLVSCOMBTN = screen.getByText(/Player vs Com/i);
  fireEvent.click(PLVSCOMBTN);
  expect(screen.getByText(/Player/i)).toBeInTheDocument();
});

test("select computer vs computer game", () => {
  render(<App />);
  const PLVSCOMBTN = screen.getByText(/Com vs Com/i);
  fireEvent.click(PLVSCOMBTN);
  expect(screen.getAllByText(/Computer/i)).toHaveLength(2);
});

test("Go back to Menu", () => {
  render(<App />);
  const PLVSCOMBTN = screen.getByText(/Player vs Com/i);
  fireEvent.click(PLVSCOMBTN);
  const menuBtn = screen.getByText(/menu/i);
  fireEvent.click(menuBtn);
  expect(screen.getByText(/Rock-Paper-Scissors Game/i)).toBeInTheDocument();
});
