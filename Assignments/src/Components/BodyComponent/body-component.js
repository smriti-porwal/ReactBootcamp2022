import CardComponent from "../CardComponent/card-component";
import "./body-component.css";
import data from "../../data.json";
import SearchComponent from "../SearchComponent/search-component";
import { useState } from "react";

const BodyComponent = () => {
  const [filteredData, setFilteredData] = useState(data);
  return (
    <div className="team-detail-container">
      <SearchComponent data={data} setFilteredData={setFilteredData} />
      {filteredData.map((teamMemberDetail) => {
        return (
          <CardComponent data={teamMemberDetail} key={teamMemberDetail.id} />
        );
      })}
    </div>
  );
};

export default BodyComponent;
