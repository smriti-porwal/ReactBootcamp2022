import CardComponent from "../CardComponent/card-component";
import "./body-component.css";

const BodyComponent = () => {
  let teamMemberDetails = [
    {
      id: 1,
      photo:
        "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
      name: "Vamshigoud",
      place: "hanumakonda",
      company: "Cognizant ",
      designation: "2 years",
    },
    {
      id: 2,
      photo:
        "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
      name: "Smriti Porwal",
      place: "Rajaganj",
      company: "Hughes systique corporation",
      designation: "3 years",
    },
    {
      id: 3,
      photo:
        "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
      name: "Shaksham",
      place: "Gaya",
      company: "Yellow AI",
      designation: "1 year",
    },
    {
      id: 4,
      photo:
        "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
      name: "Shiva Kalyan",
      place: "Dowleswaram",
      company: "Virtusa consulting services Pvt Ltd",
      designation: "2 years",
    },
    {
      id: 5,
      photo:
        "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
      name: "Simran",
      place: "Bhagalpur",
      company: "Narula institute of technology",
      designation: "7th Sem",
    },
    {
      id: 6,
      photo:
        "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
      name: "Piyush Nirmal",
      place: "Electronic City, Bangalore ",
      company: "Henkel",
      designation: "7 years",
    },
    {
      id: 7,
      photo:
        "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
      name: "Nitish Barik",
      place: "cuttack ",
      company: "Accenture",
      designation: "5 years",
    },
    {
      id: 8,
      photo:
        "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
      name: "Iswarya Chelliah",
      place: "Melagaram",
      company: "Accenture",
      designation: "2 years",
    },
    {
      id: 9,
      photo:
        "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
      name: "Jitendra Shekhawat",
      place: "Jaipur",
      company: "TCS",
      designation: "3 years",
    },
    {
      id: 10,
      photo:
        "https://scontent.fdel27-5.fna.fbcdn.net/v/t1.6435-9/120300090_1401917953339744_4526160489616159108_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vf01-5emDmEAX-A_b6P&tn=cOTsm3FbCjEH4WMU&_nc_ht=scontent.fdel27-5.fna&oh=00_AfA-HYnJL6dh8lVSiv1kfJyVhldGgo-Jz4JVVohCYD3V_g&oe=63A84959",
      name: "Sireesha",
      place: "Vijayawada",
      company: "Apiwiz",
      designation: "0.5 years",
    },
  ];
  return (
    <div className="team-detail-container">
      {teamMemberDetails.map((teamMemberDetail) => {
        return (
          <CardComponent data={teamMemberDetail} key={teamMemberDetail.id} />
        );
      })}
    </div>
  );
};

export default BodyComponent;
