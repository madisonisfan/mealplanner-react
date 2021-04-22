import React, { Component } from "react";
import {
  Jumbotron,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Nav,
} from "reactstrap";

function MainHeader(props) {
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <div className="container-fluid">
          <div className="row  align-items-center">
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
  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  render() {
    return (
      <Navbar dark expand="md">
        <div className="container-fluid">
          <NavbarToggler isClick={this.toggleNav}></NavbarToggler>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
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
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default MainHeader;
