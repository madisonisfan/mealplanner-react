import React, { Component } from "react";
import {
  Jumbotron,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
} from "reactstrap";

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

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }
  render() {
    return (
      <Navbar>
        <div className="container">
          <NavbarToggler isOpen={this.state.isNavOpen}></NavbarToggler>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <NavItem>
              <NavLink></NavLink>
            </NavItem>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default MainHeader;
