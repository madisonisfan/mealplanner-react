//import arrays
import { RECIPES } from "../shared/recipes";
import { MEALTYPES } from "../shared/mealTypes";
import { POSTS } from "../shared/posts";

export const initialState = {
  recipes: RECIPES,
  mealTypes: MEALTYPES,
  posts: POSTS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
