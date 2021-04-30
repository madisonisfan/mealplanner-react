import * as ActionTypes from "./ActionTypes";
import { POSTS } from "../shared/posts";
import { MEALTYPES } from "../shared/mealTypes";
import { RECIPES } from "../shared/recipes";
import { USERINFO } from "../shared/userInfo";

export const fetchPosts = () => (dispatch) => {
  dispatch(postsLoading());

  setTimeout(() => {
    dispatch(addPosts(POSTS));
    //console.log(`POSTS from act creators:${POSTS}`);
  }, 2000);
};

export const addPosts = (posts) => ({
  type: ActionTypes.ADD_POSTS,
  payload: posts,
});

export const postsFailed = (errMess) => ({
  type: ActionTypes.POSTS_FAILED,
  payload: errMess,
});

export const postsLoading = () => ({
  type: ActionTypes.POSTS_LOADING,
});

export const postNewPost = (postType, postContent) => (dispatch) => {
  const newPost = {
    postType: postType,
    postContent: postContent,
  };
  newPost.date = new Date().toISOString();
  newPost.author = "random author";

  dispatch(addPost(newPost));
};

export const addPost = (post) => ({
  type: ActionTypes.ADD_POST,
  payload: post,
});

export const fetchMealtypes = () => (dispatch) => {
  dispatch(addMealtypes(MEALTYPES));
};

export const addMealtypes = (mealtypes) => ({
  type: ActionTypes.ADD_MEALTYPES,
  payload: mealtypes,
});

export const fetchRecipes = () => (dispatch) => {
  dispatch(addRecipes(RECIPES));
};

export const addRecipes = (recipes) => ({
  type: ActionTypes.ADD_RECIPES,
  payload: recipes,
});

export const postRecipe = (
  name,
  description,
  servings,
  calories,
  cooktime,
  preptime,
  ingredients,
  instructions
) => (dispatch) => {
  alert("post recipe");

  const newRecipe = {
    name,
    description,
    servings,
    calories,
    cooktime,
    preptime,
    ingredients,
    instructions,
  };

  newRecipe.date = new Date().toISOString();
  newRecipe.image = "/assets/images/food2.jpg";

  dispatch(addRecipe(newRecipe));
};

export const addRecipe = (recipe) => ({
  type: ActionTypes.ADD_RECIPE,
  payload: recipe,
});

export const fetchUserInfo = () => (dispatch) => {
  dispatch(addUserInfo(USERINFO));
};

export const addUserInfo = (userinfo) => ({
  type: ActionTypes.ADD_USERINFO,
  payload: userinfo,
});
