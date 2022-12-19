import { useState } from "react";

import CardComponent from "./card-component";
import { Link } from "react-router-dom";
import stateObj from "../../Utility/city-state.json";
import { getCities } from "../../Utility/useCity";
import "./card-component.css";

const CardContainer = ({ listOfTeamMember }) => {
  const [state, setState] = useState("Delhi");
  const [city, setCity] = useState("");
  const cityList = getCities(state);
  return (
    <>
      <div id="state-city">
        <select
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        >
          {Object.keys(stateObj).map((ele) => (
            <option key={ele} value={ele}>
              {ele}
            </option>
          ))}
        </select>
        <select
          value={city}
          onChange={(e) => {
            e.target.value;
          }}
        >
          {cityList.map((city) => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            );
          })}
        </select>
      </div>
      {listOfTeamMember?.map((teamMemberDetail) => (
        <Link to={`/member/${teamMemberDetail.login}`}>
          <CardComponent
            key={teamMemberDetail.login}
            teamMemberDetail={teamMemberDetail}
          />
        </Link>
      ))}
    </>
  );
};
export default CardContainer;
