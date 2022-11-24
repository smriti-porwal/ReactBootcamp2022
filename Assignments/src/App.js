// import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/icon.png"
import userIcon from "./assets/user.png"

// const heading = React.createElement(
//   "div",
//   { id: "title", className: "title" },
//   [
//     React.createElement("h1", { id: "heading1" }, "Namaste Javascript Bootcamp!"),
//     React.createElement("h2", { id: "heading2" }, "From zero to hero"),
//     React.createElement("h3", { id: "heading3" }, "In three months"),
//   ]
// );
// const HeaderComponent1 = () => {
//     return (
//         <h1 id="heading1"> Namaste Javascript Bootcamp! </h1>
//     );
// };
// const HeadComponent = () => {
//   return (
//     <div className="title">
//       <HeaderComponent1></HeaderComponent1>
//       <h2 id="heading2"> From zero to hero </h2>
//       <h3 id="heading3"> In three months </h3>
//     </div>
//   );
// };

// {HeaderComponent1}
// It will give Warning: Functions are not valid as a React child. This
// may happen if you return a Component instead of from render. Or maybe you
// meant to call this function rather than return it. 
// <HeaderComponent1 />
// <HeaderComponent1></HeaderComponent1>
// will render the child component 

const HeaderComponent = () => {
  return (
    <div className="nav">
        <img src={logo} id="logo" alt="React"></img> 
        <input type="text" id="searchBar" placeholder="Search anything here.."></input>
        <img src={userIcon} id="user" alt="user"></img>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(<HeadComponent/>);
root.render(<HeaderComponent/>);
