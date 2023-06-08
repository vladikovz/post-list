import { UserActionTypes } from '../types';
import { User } from '../../interfaces/User';
import { UserAction } from '../reducers/usersReducer';

export const addUsers = (payload: { users: User }): UserAction => ({
  type: UserActionTypes.ADD_USERS,
  payload,
});
