import React from "react";
import "./App.css";
import { User } from "./User";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: { name: "Name", username: "Username: " },
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/LukaKrsmanovic")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ userInfo: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getUserInfo(name) {
    return <User userInfo={this.state.userInfo}></User>;
  }

  render() {
    return <div className="ui link cards">{this.getUserInfo()}</div>;
  }
}

export default App;
