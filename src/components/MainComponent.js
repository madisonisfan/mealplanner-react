import React, { Component } from "react";
import Home from "./HomeComponent";
import MainHeader from "./HeaderComponent";
import Footer from "./FooterComponent";
import MainBlogPage from "./BlogComponent";
import YourPage from "./YourPageComponent";
import {
  fetchPosts,
  postNewPost,
  fetchMealtypes,
  fetchRecipes,
  fetchUserInfo,
  postRecipe,
} from "../redux/ActionCreators";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MainRecipePage from "./RecipePageComponent";
import { actions } from "react-redux-form";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    mealtypes: state.mealtypes,
    posts: state.posts,
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = {
  fetchPosts: () => fetchPosts(),
  resetPostForm: () => actions.reset("postForm"),
  addPost: (postType, postContent) => postNewPost(postType, postContent),
  fetchMealtypes: () => fetchMealtypes(),
  fetchRecipes: () => fetchRecipes(),
  postRecipe: (
    name,
    description,
    servings,
    calories,
    cooktime,
    preptime,
    ingredients,
    instructions
  ) =>
    postRecipe(
      name,
      description,
      servings,
      calories,
      cooktime,
      preptime,
      ingredients,
      instructions
    ),
  fetchUserInfo: () => fetchUserInfo(),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchMealtypes();
    this.props.fetchRecipes();
    this.props.fetchUserInfo();
  }

  render() {
    const RecipeWithMealType = ({ match }) => {
      const type = match.params.mealType;
      const selectedTypeTitle = this.props.mealtypes.mealtypes
        .filter((typeObj) => typeObj.mealType === type)
        .map((typeObj) => typeObj.title);

      if (type === "allRecipes") {
        return (
          <MainRecipePage
            selectedType="All Recipes"
            mealTypes={this.props.mealtypes.mealtypes}
            recipes={this.props.recipes.recipes}
            postRecipe={this.props.postRecipe}
          />
        );
      } else {
        return (
          <MainRecipePage
            selectedType={selectedTypeTitle}
            mealTypes={this.props.mealtypes.mealtypes}
            recipes={this.props.recipes.recipes.filter(
              (recipe) => recipe.mealType === match.params.mealType
            )}
            postRecipe={this.props.postRecipe}
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
          <Route
            path="/blog"
            render={() => (
              <MainBlogPage
                posts={this.props.posts.posts}
                postsLoading={this.props.posts.isLoading}
                postsErrMess={this.props.posts.errMess}
                resetPostForm={this.props.resetPostForm}
                addPost={this.props.addPost}
              />
            )}
          />
          <Route
            path="/yourpage"
            render={() => <YourPage userInfo={this.props.userInfo.userInfo} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
