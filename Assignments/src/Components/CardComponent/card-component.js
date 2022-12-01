import "./card-component.css";

const CardComponent = ({ data: {photo, name, place, company, designation } }) => {
  // const { photo, name, place, company, designation } = data;
  return (
    <div className="card">
      <img src={photo} className="userimage" alt="UserName"></img>
      <div>Name: {name}</div>
      <div>Place: {place}</div>
      <div>Company: {company}</div>
      <div>Designation: {designation}</div>
    </div>
  );
};

export default CardComponent;
