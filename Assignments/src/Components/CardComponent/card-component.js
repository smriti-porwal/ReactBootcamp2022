import { useContext } from "react";

import "./card-component.css";
import UserTheme from "../../Context/ThemeContext";


const CardComponent = ({
  teamMemberDetail: { avatar_url, name, location, company, bio },
}) => {
  // const { avatar_url, name, location, company, bio } = teamMemberDetail;
  const { theme } = useContext(UserTheme);
  return (
    <div className="card" style={{backgroundColor: theme === "Light" ? "#fff" : "aquablue"}}>
      <img src={avatar_url} className="userimage" alt="UserName"></img>
      <div>Name: {name}</div>
      <div>Place: {location}</div>
      <div>Company: {company}</div>
      <div>Bio: {bio}</div>
    </div>
  );
};

export default CardComponent;
