import React, { Component } from "react";
import Home from "./HomeComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Home />
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