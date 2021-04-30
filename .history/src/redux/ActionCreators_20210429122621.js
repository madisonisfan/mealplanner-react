import * as ActionTypes from "./ActionTypes";
import { POSTS } from "../shared/posts";

export const fetchPosts = () => (dispatch) => {
  dispatch(postsLoading);

  setTimeout(() => {
    dispatch(addPosts(POSTS));
  });
};

export const addPosts = (posts) => ({
  action: ActionTypes.ADD_POSTS,
  payload: posts,
});

export const postsFailed = (errMess) => ({
  action: ActionTypes.POSTS_FAILED,
  payload: errMess,
});

export const postsLoading = () => ({
  action: ActionTypes.POST_LOADING,
});
