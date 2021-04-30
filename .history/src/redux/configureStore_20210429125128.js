import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Recipes } from "./recipesReducer";
import { Posts } from "./postsReducer";
import { InitialPostForm } from "./forms";

const rootReducer = combineReducers({
  recipes: Recipes,
  post: Posts,
  ...createForms({
    postForm,
  }),
});

export const ConfigureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));
  return store;
};