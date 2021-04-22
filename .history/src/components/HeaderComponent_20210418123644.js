import React from "react";
import {
  Jumbotron,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
} from "reactstrap";
import NavbarToggler from "reactstrap/lib/NavbarToggler";

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
  return (
    <Navbar>
      <div className="container">
        <NavbarToggler></NavbarToggler>
      </div>
    </Navbar>
  );
}

export default MainHeader;
