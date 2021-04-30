import * as ActionTypes from "./ActionTypes";

export const UserInfo = (
  state = {
    isLoading: true,
    errMess: null,
    userinfo: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_USERINFO:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        userinfo: action.payload,
      };
    default:
      return state;
  }
};
