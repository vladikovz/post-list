import { Filter } from '../../interfaces/Filter';
import { Post } from '../../interfaces/Post';
import { User } from '../../interfaces/User';
import { PostAction } from '../reducers/postReducer';
import { PostActionTypes } from '../types';

export const addPosts = (payload: { posts: Post[] }): PostAction => ({
  type: PostActionTypes.ADD_POST,
  payload,
});

export const filterPost = (payload: {
  value: string;
  filter: Filter;
  users: User[];
}): PostAction => ({
  type: PostActionTypes.FILTER_POST,
  payload,
});

export const setSelectedPost = (payload: Post | null): PostAction => ({
  type: PostActionTypes.SET_SELECTED_POST,
  payload,
});

export const resetFilterPost = (): PostAction => ({
  type: PostActionTypes.RESET_FILTER_POST,
});
