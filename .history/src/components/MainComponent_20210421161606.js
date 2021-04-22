import React, { Component } from "react";
import Home from "./HomeComponent";
import MainHeader from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <MainHeader />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/recipes/allrecipes" />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Main));