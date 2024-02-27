import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

 

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Food Web APp About Page</h2>
        {/* <User name={"Dhairya function"} /> */}
        <UserClass name={"First"} location={"Ahmedabad - Class"} />
      </div>
    );
  }
}



export default About;
