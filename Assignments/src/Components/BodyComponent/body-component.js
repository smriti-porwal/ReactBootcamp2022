import { useState , useEffect } from "react";

import CardContainer from "../CardComponent/card-container";
import "./body-component.css";
// import data from "../../data.json";
import SearchComponent from "../SearchComponent/search-component";
import NoDataComponent from "../NoDataComponent/no-data-component"

const BodyComponent = () => {

  const [listOfTeamMember, setListOfTeamMember] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    getTeamsData();
  }, []);
  async function getTeamsData() {
    let teamMembersList = [
      "smriti-porwal",
      "iswarya15",
      "shaksham08",
      "ap221882",
      "nitishnivedan"
    ];
    let members = await Promise.all(
      teamMembersList.map(async (teamMember) => {
        const userInformation = await fetch(
          `https://api.github.com/users/${teamMember}`
        );
        return await userInformation.json();
      })
    );
    setListOfTeamMember(members);
    setFilteredData(members);
  }
  return (
    <div className="team-detail-container">
      <SearchComponent data={listOfTeamMember} setFilteredData={setFilteredData} />
      {
        filteredData && filteredData.length ?  <CardContainer listOfTeamMember={filteredData} /> : <NoDataComponent />
      }
     
    </div>
  );
};

export default BodyComponent;
