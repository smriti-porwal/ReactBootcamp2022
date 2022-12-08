import CardComponent from "./card-component";
import { Link } from "react-router-dom";

const CardContainer = ({ listOfTeamMember }) =>
  listOfTeamMember?.map((teamMemberDetail) => (
    <Link to={`/member/${teamMemberDetail.login}`}>
      <CardComponent
        teamMemberDetail={teamMemberDetail}
        key={teamMemberDetail.login}
      />
    </Link>
  ));
export default CardContainer;
