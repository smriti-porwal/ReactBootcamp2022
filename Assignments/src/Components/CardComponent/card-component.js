import "./card-component.css";

const CardComponent = ({
  teamMemberDetail: { avatar_url, name, location, company, bio },
}) => {
  // const { avatar_url, name, location, company, bio } = teamMemberDetail;
  return (
    <div className="card">
      <img src={avatar_url} className="userimage" alt="UserName"></img>
      <div>Name: {name}</div>
      <div>Place: {location}</div>
      <div>Company: {company}</div>
      <div>Bio: {bio}</div>
    </div>
  );
};

export default CardComponent;
