import { createStore, combineReducers } from "redux";
//import { Reducer, initialState } from "./reducer";
import { Recipes } from "./recipesReducer";
import { Posts } from "./postsReducer";

const rootReducer = combineReducers({
  recipes: Recipes,
  post: Posts,
});

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialState);
  return store;
};
