import { combineReducers } from 'redux';

import { commentsReducer } from './commentsReducer';
import { postReducer } from './postReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  posts: postReducer,
  users: usersReducer,
  comments: commentsReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>;
