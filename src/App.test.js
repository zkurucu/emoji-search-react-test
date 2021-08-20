import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import { render, screen } from "@testing-library/react";


// App component without crash
test("Renders app component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

// Header component without crash
test("Renders header component without crashing", () => {
  const div2 = document.createElement("div");
  ReactDOM.render(<Header />, div2);
});

// Rendering emoji list without crash
test("Renders emoji list without crash", () => {
  render(<App />);
  const emojiListContainer = screen.getByTestId("all-emojis");
  expect(emojiListContainer.childNodes.length === 20);
});
