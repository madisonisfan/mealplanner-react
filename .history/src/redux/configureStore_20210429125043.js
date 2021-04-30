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
});

export const ConfigureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));
  return store;
};
