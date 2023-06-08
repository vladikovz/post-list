import { UserActionTypes } from '../types';
import { User } from '../../interfaces/User';

export interface UserAction {
  type: UserActionTypes;
  payload?: any;
}

interface UserStore {
  users: User[];
}

const initialStore: UserStore = {
  users: [],
};

export const usersReducer = (store = initialStore, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.ADD_USERS:
      const users = action.payload;
      return {
        ...store,
        users,
      };
    default:
      return store;
  }
};
