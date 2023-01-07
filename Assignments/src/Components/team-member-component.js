import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CardComponent from "./CardComponent/card-component";
import { getTeamMemberData } from "../Services/getTeamDataService";
const TeamMemberComponent = () => {
  const { id } = useParams();

  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    getMemberData(id);
  }, []);
  async function getMemberData(id) {
    let member = await getTeamMemberData(id);
    console.log(member);
    if (member) setMemberData(member);
  }

  return (
    <>
      <div className="flex items-center justify-center">
      <CardComponent teamMemberDetail={memberData} key={memberData.login} />
      </div>
    </>
  );
};
export default TeamMemberComponent;
