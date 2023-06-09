import { Dispatch } from 'react';
import axios from 'axios';
import { addPosts } from '../store/actions/postActions';
import { POSTS_ENDPOINT } from '../constants/endpoints';

export const getPosts = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.get(POSTS_ENDPOINT);
      dispatch(addPosts(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
