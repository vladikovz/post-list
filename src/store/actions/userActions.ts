import { User } from '../../interfaces/User';
import { UserAction } from '../reducers/usersReducer';
import { UserActionTypes } from '../types';

export const addUsers = (payload: { users: User }): UserAction => ({
  type: UserActionTypes.ADD_USERS,
  payload,
});
