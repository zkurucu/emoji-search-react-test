import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";


// App component without crash
test("Renders app component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("Renders header component without crashing", () => {
    const div2 = document.createElement("div");
    ReactDOM.render(<Header />, div2);
});
