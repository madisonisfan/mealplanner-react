import React, { Component } from "react";
import {
  Jumbotron,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
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
      <MainNav />
    </React.Fragment>
  );
}

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true,
    };
  }
  render() {
    return (
      <Navbar>
        <div className="container">
          <NavbarToggler isOpen={this.state.isNavOpen}></NavbarToggler>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/recipes">
                Recipes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/mealplan">
                Mealplan
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/yourpage">
                Your Page
              </NavLink>
            </NavItem>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default MainHeader;
