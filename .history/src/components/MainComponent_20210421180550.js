import React, { Component } from "react";
import Home from "./HomeComponent";
import MainHeader from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MainRecipePage from "./RecipePageComponent";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    mealTypes: state.mealTypes,
  };
};

class Main extends Component {
  render() {
    const RecipeWithMealType = ({ match }) => {
      const type = match.params.mealType;
      alert(`type in main${match}`);
      if (type === "all") {
        return (
          <MainRecipePage
            type={this.mealTy}
            mealTypes={this.props.mealTypes}
            recipes={this.props.recipes}
          />
        );
      } else {
        return (
          <MainRecipePage
            type={type}
            mealTypes={this.props.mealTypes}
            recipes={this.props.recipes.filter(
              (recipe) => recipe.mealType === match.params.mealType
            )}
          />
        );
      }
    };

    return (
      <React.Fragment>
        <MainHeader />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/recipes/:mealType" component={RecipeWithMealType} />

          <Redirect to="/home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Main));
