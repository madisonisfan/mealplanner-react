import React, { Component } from "react";
import Home from "./HomeComponent";
import MainHeader from "./HeaderComponent";
import Footer from "./FooterComponent";
import MainBlogPage from "./BlogComponent";
import {
  fetchPosts,
  addPost,
  postNewPost,
  fetchMealtypes,
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
  };
};

const mapDispatchToProps = {
  fetchPosts: () => fetchPosts(),
  resetPostForm: () => actions.reset("postForm"),
  addPost: (postType, postContent) => postNewPost(postType, postContent),
  fetchMealtypes: () => fetchMealtypes(),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchMealtypes();
  }

  render() {
    const RecipeWithMealType = ({ match }) => {
      const type = match.params.mealType;
      const selectedTypeTitle = this.props.mealTypes
        .filter((typeObj) => typeObj.mealType === type)
        .map((typeObj) => typeObj.title);

      if (type === "allRecipes") {
        return (
          <MainRecipePage
            selectedType="All Recipes"
            mealTypes={this.props.mealTypes}
            recipes={this.props.recipes}
          />
        );
      } else {
        return (
          <MainRecipePage
            selectedType={selectedTypeTitle}
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
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
