import teamLogo from "../assets/teamLogo.png";
import { teamName } from "../Utility/constant";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserTheme from "../Context/ThemeContext";

const HeaderComponent = () => {
  const { theme, setTheme } = useContext(UserTheme);
  return (
    <>
      <div className="flex justify-between px-3 py-3 bg-gray-300">
        <div className="flex">
          <img
            className="h-20 w-20"
            src={teamLogo}
            id="teamLogo"
            alt="Team Gladiator"
          ></img>
          <h1 id="headingName" className="text-6xl">
            {teamName}
          </h1>
        </div>
        <div className="flex space-x-5 items-center">
            <Link className="text-xl p-2 border-r" to="/about-us">
              About Us 
            </Link>
            <Link className="text-xl p-2 border-r" to="/">
              Search
            </Link>
            <button className="text-xl"
              onClick={() => {
                setTheme(theme === "Light" ? "Dark" : "Light");
              }}
            >
              {theme === "Light" ? "Dark" : "Light"} Theme
            </button>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
