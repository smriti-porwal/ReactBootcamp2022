import CardComponent from "./card-component";

const CardContainer = ({ listOfTeamMember }) =>
  listOfTeamMember?.map((teamMemberDetail) => (
    <CardComponent
      teamMemberDetail={teamMemberDetail}
      key={teamMemberDetail.login}
    />
  ));
export default CardContainer;
