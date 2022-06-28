import { render, screen } from "@testing-library/react";
import React from "react";
import Button from "./button";

describe("test button", () => {
  const onClick = jest.fn();
  test("if button works", () => {
    render(<Button onClick={onClick}>Hello World</Button>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
