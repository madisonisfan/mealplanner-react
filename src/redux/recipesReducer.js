import * as ActionTypes from "./ActionTypes";

export const Recipes = (
  state = { isLoading: true, errMess: null, recipes: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_RECIPES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        recipes: action.payload,
      };
    case ActionTypes.ADD_RECIPE:
      const recipe = action.payload;
      return { ...state, recipes: state.recipes.concat(recipe) };
    default:
      return state;
  }
};
