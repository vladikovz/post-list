import { Dispatch } from 'react';

import axios from 'axios';

import { USERS_ENDPOINT } from '../constants/endpoints';
import { addUsers } from '../store/actions/userActions';

export const getUsers = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.get(USERS_ENDPOINT);
      dispatch(addUsers(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
