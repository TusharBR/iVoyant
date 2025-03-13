
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";


test("renders the card component", () => {
  render(<Card />);
  expect(screen.getByTestId("card-heading")).toBeInTheDocument();
  expect(screen.getByTestId("card-message")).toBeInTheDocument();
});

test("handles button clicks correctly", () => {
  render(<Card />);
  const messageElement = screen.getByTestId("card-message");
  const primaryButton = screen.getByTestId("btn-primary");
  const secondaryButton = screen.getByTestId("btn-secondary");

  fireEvent.click(primaryButton);
  expect(messageElement).toHaveTextContent("Primary clicked");

  fireEvent.click(secondaryButton);
  expect(messageElement).toHaveTextContent("Secondary clicked");
});