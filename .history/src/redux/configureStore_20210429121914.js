import { createStore, combineReducersm, applyMiddleware } from "redux";
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
