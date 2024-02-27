import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url:""
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/dhairya-create");
    const json = await data.json();
    console.log(json);

    this.setState ( {
      userInfo: json,
    });
  }

  render() {
    //const { name, location } = this.props;
    const {name,location,avatar_url} = this.state.userInfo
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
       <img style={{borderRadius:"50%",height:"100px",width:"100px"}} src={avatar_url} alt="avatar-url" />
      </div>
    );
  }
}

export default UserClass;
