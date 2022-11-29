import './card-component.css';

const CardComponent = ({data}) => {
    const {photo, name, place, company, designation} = data;
    return (
        <div className="card">
            <img src={photo} className="userimage" alt="UserName"></img>
            <div>{name}</div>
            <div>{place}</div>
            <div>{company}</div>
            <div>{designation}</div>
        </div>
    )
};

export default CardComponent;