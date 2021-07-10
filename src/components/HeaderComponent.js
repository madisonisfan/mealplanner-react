import React, { Component } from "react";

import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function MainHeader(props) {
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <div className="container-fluid">
          <div className="row  align-items-center">
            <div className="col ml-4">
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
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar light sticky="top" expand="md">
          <div className="container-fluid">
            <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/recipes/allRecipes">
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
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default MainHeader;
