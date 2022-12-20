import { Component } from "react";

import { getTeamMemberData } from "../../Services/getTeamDataService";

// const ProfileComponent = () => {
//   return (
//     <>
//       <h1>My Profile</h1>
//     </>
//   );
// };
class ProfileComponent extends Component {
    // we will create state inside constructor
    constructor(props){
        super(props);
        // create state using "state" keyword
        this.state = {
            email: "smriti941144@gmail.com",
            phone: "9411446487",
            githubDetail: {}
        }
        console.log("profile - constructor");
    }
    render() {
    return (
      <div>
        {console.log("profile - Render")}
        {/* here "props" is keyword using which we can access the attached props. */}
        <h1>Name: {this.props.name}</h1>
        {/* using state here */}
        <img src={this.state?.githubDetail?.avatar_url}></img>
        <h1>Email: {this.state?.email}</h1>
        <h1>Phone No.: {this.state?.phone}</h1>
        <h2>My Github Details</h2>
        <h3>Bio: {this.state?.githubDetail?.bio}</h3>
        <h3>Repo URL: {this.state?.githubDetail?.repos_url}</h3>
        <h3>Company: {this.state?.githubDetail?.company}</h3>
      </div>
    );
  }
  // called only for first time
  async componentDidMount(){
    console.log("profile - componentdidmount");
    let data = await getTeamMemberData("smriti-porwal");
    // update state using setstate method
    this.setState({
        githubDetail: data
    })
    console.log(this.state.githubDetail);
  }
  //called every time there is any state changes 
  componentDidUpdate(){
    console.log("profile - componentdidupdate");
  }
// earlier developers used to use conditions to handle conditional updates 
//   componentDidUpdate(prevProps, prevState){
//     if(prevProps.company === this.props.company){
//       // do something
//     }
//     console.log("profile - componentdidupdate");
//   }
componentWillUnmount(){
    console.log("profile - componentWillUnmount");
    // cleaning is done here, unsubsccribe or clear intervals
  }
}
export default ProfileComponent;
