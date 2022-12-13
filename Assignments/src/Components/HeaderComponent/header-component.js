import teamLogo from "../../assets/teamLogo.png";
import "./header-component.css";
import { teamName } from "../../constant";

const HeaderComponent = () => (
  <div className="header">
    <img src={teamLogo} id="teamLogo" alt="Team Gladiator"></img>
    <h1 id="headingName">{teamName}</h1>
  </div>
);

export default HeaderComponent;
