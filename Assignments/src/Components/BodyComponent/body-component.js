import { useState, useEffect } from "react";

import CardContainer from "../CardComponent/card-container";
import "./body-component.css";
import SearchComponent from "../SearchComponent/search-component";
import NoDataComponent from "../NoDataComponent/no-data-component";
import { getTeamsData } from "../../Services/getTeamDataService";

const BodyComponent = () => {
  const [listOfTeamMember, setListOfTeamMember] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    getTeamsMemberData();
  }, []);
  async function getTeamsMemberData() {
    let members = await getTeamsData();
    if (members && members.length) {
      setListOfTeamMember(members);
      setFilteredData(members);
    }
  }

  return (
    <div className="team-detail-container">
      <SearchComponent
        data={listOfTeamMember}
        setFilteredData={setFilteredData}
      />
      {filteredData && filteredData.length ? (
        <CardContainer listOfTeamMember={filteredData} />
      ) : (
        <NoDataComponent />
      )}
    </div>
  );
};

export default BodyComponent;
