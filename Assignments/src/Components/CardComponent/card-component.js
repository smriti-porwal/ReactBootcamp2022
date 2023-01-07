import { useContext } from "react";

import UserTheme from "../../Context/ThemeContext";


const CardComponent = ({
  teamMemberDetail: { avatar_url, name, location, company, bio },
}) => {
  // const { avatar_url, name, location, company, bio } = teamMemberDetail;
  const { theme } = useContext(UserTheme);
  return (
    <div className="m-3 p-3 w-64 h-72 border border-solid rounded-sm" style={{backgroundColor: theme === "Light" ? "#fff" : "aquablue"}}>
      <img src={avatar_url} className="w-40 mx-auto" alt="UserName"></img>
      <div className="font-bold text-xl text-center">{name ? name : "--"}</div>
      <div className="text-center">Place: {location ? location : "--"}</div>
      <div className="text-center">Company: {company ? company : "--"}</div>
    </div>
  );
};

export default CardComponent;
