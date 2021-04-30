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
    default:
      return state;
  }
};
