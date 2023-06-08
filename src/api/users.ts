import { Dispatch } from 'react';
import axios from 'axios';
import { addUsers } from '../store/actions/userActions';
import { USERS_ENDPOINT } from '../constants/endpoints';

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
