import React, { Component } from "react";
import Home from "./HomeComponent";
import MainHeader from "./HeaderComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainHeader /> <Home />
      </div>
      /*
            <div>
            <Switch>
            Add routes here

            </div>

            */
    );
  }
}
export default Main;
