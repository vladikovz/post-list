import { Dispatch } from 'react';
import axios from 'axios';
import { addComments } from '../store/actions/commentActions';
import { COMMENTS_ENDPOINT } from '../constants/endpoints';

export const getComments = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.get(COMMENTS_ENDPOINT);
      dispatch(addComments(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
