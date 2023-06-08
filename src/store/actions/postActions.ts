import { PostActionTypes } from '../types';
import { PostAction } from '../reducers/postReducer';
import { Post } from '../../interfaces/Post';
import { Filter } from '../../interfaces/Filter';
import { User } from '../../interfaces/User';

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
