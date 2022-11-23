import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "title", className: "title" },
  [
    React.createElement("h1", { id: "heading1" }, "Namaste Javascript Bootcamp!"),
    React.createElement("h2", { id: "heading2" }, "From zero to hero"),
    React.createElement("h3", { id: "heading3" }, "In three months"),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
