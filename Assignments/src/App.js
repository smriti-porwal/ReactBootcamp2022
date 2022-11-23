import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {className: 'heading'}, "Hello React and Parcel!");
// component name should start with capital letter.
const HeadComponent = () => {
    return React.createElement("h1", {className: 'heading'}, "Hello React and Parcel!");
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadComponent/>)
