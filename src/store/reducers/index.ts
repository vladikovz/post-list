import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { postReducer } from './postReducer';
import { commentsReducer } from './commentsReducer';

export const rootReducer = combineReducers({
  posts: postReducer,
  users: usersReducer,
  comments: commentsReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>;
