import { Component } from "react";
import { Outlet } from "react-router-dom";
// const AboutUsComponent = () => {
//   return (
//     <>
//       <h1>About us page</h1>
//       <Outlet />
//     </>
//   );
// };

class AboutUsComponent extends Component {
  constructor(){
    super();
    console.log("Parent - constructor");
  }
  render() {
    return (
      <>
        {console.log("parent- render")}
        {/* <h1>About us page</h1> */}
        <Outlet />
      </>
    );
  }
  componentDidMount(){
    console.log("parent - componentdidmount")

  }
  componentDidUpdate(){
    console.log("parent - componentdidupdate");
  }
  componentWillUnmount(){
    console.log("parent - componentWillUnmount");
  }
}
export default AboutUsComponent;
