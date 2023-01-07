import { useState } from "react";

import CardComponent from "./card-component";
import { Link } from "react-router-dom";
import stateObj from "../../Utility/city-state.json";
import { getCities } from "../../Utility/useCity";

const CardContainer = ({ listOfTeamMember }) => {
  const [state, setState] = useState("Delhi");
  const [city, setCity] = useState("");
  const cityList = getCities(state);
  return (
    <>
      <div id="state-city" className="flex absolute top-28">
        <select className="border border-solid m-3 p-2"
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
        <select className="border border-solid m-3 p-2"
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
      <div className="flex flex-wrap">
      {listOfTeamMember?.map((teamMemberDetail) => (
        <Link key={teamMemberDetail.login} to={`/member/${teamMemberDetail.login}`}>
          <CardComponent
            key={teamMemberDetail.login}
            teamMemberDetail={teamMemberDetail}
          />
        </Link>
      ))}
      </div>
    </>
  );
};
export default CardContainer;
