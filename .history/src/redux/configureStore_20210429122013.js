import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Recipes } from "./recipesReducer";
import { Posts } from "./postsReducer";

const rootReducer = combineReducers({
  recipes: Recipes,
  post: Posts,
});

export const ConfigureStore = () => {
  const store = createStore(rootReducer);
  return store;
};
