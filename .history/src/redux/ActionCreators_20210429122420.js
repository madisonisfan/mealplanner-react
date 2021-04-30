import * as ActionTypes from "./ActionTypes";
import { POSTS } from "../shared/posts";

export const fetchPosts = () => (dispatch) => {
  dispatch(postsLoading);

  setTimeout(() => {
    dispatch(addPosts(POSTS));
  });
};

export const addPosts = (post) => {
  action: ActionTypes.ADD_POSTS;
};