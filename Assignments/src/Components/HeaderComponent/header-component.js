import teamLogo from "../../assets/teamLogo.png";
import "./header-component.css";
import { teamName } from "../../Utility/constant";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserTheme from "../../Context/ThemeContext";

const HeaderComponent = () => {
  const {theme, setTheme} = useContext(UserTheme);
  return (
    <>
      <div className="header">
        <img src={teamLogo} id="teamLogo" alt="Team Gladiator"></img>
        <h1 id="headingName">{teamName}</h1>
      </div>
      <div className="nav">
        <span>
          <Link className="text-link" to="/about-us">
            About Us
          </Link>
        </span>
        <span>
          <Link className="text-link" to="/search">
            Search
          </Link>
        </span>
        <span className="dark-mode">
          <button onClick={()=>{setTheme(theme === "Light" ? "Dark" : "Light")}}>{theme === "Light" ? "Dark" : "Light"} Theme</button>
        </span>
      </div>
    </>
  );
};

export default HeaderComponent;
