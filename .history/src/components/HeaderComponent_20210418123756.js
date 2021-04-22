import React, {Component} from "react";
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

class Nav extends Component {
  return (
    <Navbar>
      <div className="container">
        <NavbarToggler isOpen={this.state.isNavOpen}></NavbarToggler>

      </div>
    </Navbar>
  );
}

export default MainHeader;
