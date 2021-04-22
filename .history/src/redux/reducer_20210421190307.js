//import arrays
import { RECIPES } from "../shared/recipes";
import { MEALTYPES } from "../shared/mealTypes";

export const initialState = {
  recipes: RECIPES,
  mealTypes: MEALTYPES,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
