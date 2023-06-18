import { Dispatch } from 'react';

import axios from 'axios';

import { COMMENTS_ENDPOINT } from '../constants/endpoints';
import { addComments } from '../store/actions/commentActions';

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
