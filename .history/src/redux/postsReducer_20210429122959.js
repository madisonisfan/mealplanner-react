import * as ActionTypes from "./ActionTypes";

export const Posts = (
  state = {
    errMess: null,
    isLoading: true,
    posts: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_POSTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        posts: action.payload,
      };
    case ActionTypes.POST_LOADING:
    case ActionTypes.POSTS_FAILED:
    default:
      return state;
  }
};
