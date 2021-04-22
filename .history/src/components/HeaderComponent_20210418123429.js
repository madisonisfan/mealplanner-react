import React from "react";
import { Jumbotron, NavBAR } from "reactstrap";

function MainHeader(props) {
  return (
    <React.Fragment>
      <Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Meal Planner</h1>
            </div>
          </div>
        </div>
      </Jumbotron>
    </React.Fragment>
  );
}

function Nav(props) {
  return <Navbar></Navbar>;
}

export default MainHeader;
