//import arrays
import { RECIPES } from "../shared/recipes";
import { MEALTYPES } from "../shared/mealTypes";

export const initialSate = {
  recipes: RECIPES,
  mealTypes: MEALTYPES,
};

export const Reducer = (state = initialSate, action) => {
  return state;
};
