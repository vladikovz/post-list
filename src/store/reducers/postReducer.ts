import { PostActionTypes } from '../types';
import { Post } from '../../interfaces/Post';
import { User } from '../../interfaces/User';

export interface PostAction {
  type: PostActionTypes;
  payload?: any;
}

interface IPostStore {
  posts: Post[];
  filteredPost: Post[];
  selectedPost: Post | null;
}

const initialStore: IPostStore = {
  posts: [],
  filteredPost: [],
  selectedPost: null,
};

export const postReducer = (store = initialStore, action: PostAction) => {
  switch (action.type) {
    case PostActionTypes.ADD_POST:
      const posts = action.payload;
      return {
        ...store,
        posts,
        filteredPost: posts,
      };
    case PostActionTypes.SET_SELECTED_POST:
      const selectedPost = action.payload;
      return {
        ...store,
        selectedPost,
      };

    case PostActionTypes.FILTER_POST:
      let filteredPost = [...store.posts];
      switch (action.payload.filter) {
        case 'username':
          const usersByUsername = action.payload.users?.filter((user: User) =>
            user.username?.toUpperCase().includes(action.payload.value.toUpperCase()),
          );
          filteredPost = store.posts.filter((post) =>
            usersByUsername.some((user: User) => user.id === post.userId),
          );
          return {
            ...store,
            filteredPost,
          };
        case 'body':
          filteredPost = store.posts.filter((post) =>
            post.body.toUpperCase().includes(action.payload.value.toUpperCase()),
          );
          return {
            ...store,
            filteredPost,
          };
        case 'userId':
          filteredPost = store.posts.filter((post) =>
            post.userId.toString().includes(action.payload.value),
          );
          return {
            ...store,
            filteredPost,
          };
        default:
          return store;
      }
    case PostActionTypes.RESET_FILTER_POST:
      return {
        ...store,
        filteredPost: store.posts,
      };
    default:
      return store;
  }
};
