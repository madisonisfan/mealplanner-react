import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";
import { Recipes } from "./recipesReducer";
import { Posts } from "./postsReducer";

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialState);
  return store;
};
