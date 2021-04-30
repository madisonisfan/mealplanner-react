import * as ActionTypes from "./ActionTypes";
import { POSTS } from "../shared/posts";

export const fetchPosts = () => (dispatch) => {
  dispatch(postsLoading);

  setTimeout(() => {
    dispatch(addPosts(POSTS));
  });
};

export const addPosts = (posts) => ({
  type: ActionTypes.ADD_POSTS,
  payload: posts,
});

export const postsFailed = (errMess) => ({
  type: ActionTypes.POSTS_FAILED,
  payload: errMess,
});

export const postsLoading = () => ({
  type: ActionTypes.POST_LOADING,
});
