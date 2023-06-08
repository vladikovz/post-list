import { CommentActionTypes } from '../types';
import { Comment } from '../../interfaces/Comment';

export interface CommentAction {
  type: CommentActionTypes;
  payload?: any;
}

interface CommentStore {
  comments: Comment[];
}

const initialStore: CommentStore = {
  comments: [],
};

export const commentsReducer = (store = initialStore, action: CommentAction) => {
  let comments = [...store.comments];
  switch (action.type) {
    case CommentActionTypes.ADD_COMMENTS:
      comments = action.payload;
      return {
        ...store,
        comments,
      };
    case CommentActionTypes.ADD_ANSWER:
      comments = store.comments.map((item) =>
        item.id === action.payload.commentId
          ? {
              ...item,
              answers: [...(item.answers || []), action.payload.answer],
            }
          : item,
      );

      return {
        ...store,
        comments,
      };

    case CommentActionTypes.ADD_TAG:
      comments = store.comments.map((item) =>
        item.id === action.payload.commentId
          ? {
              ...item,
              tags: [...(item.tags || []), action.payload.tag],
            }
          : item,
      );

      return {
        ...store,
        comments,
      };
    // case PostActionTypes.DELETE_POST:
    //     posts = posts.filter((post) => post.id !== action.payload.id)
    //     return { ...store, posts }
    // case PostActionTypes.LIKE_POST:
    //     posts = posts.map((post: IPost) =>
    //         post.id === action.payload.id
    //             ? {
    //                   ...post,
    //                   likesCount: post.likesCount ? post.likesCount + 1 : 1,
    //               }
    //             : post
    //     )
    //     return { ...store, posts }
    // case PostActionTypes.DISLIKE_POST:
    //     posts = posts.map((post: IPost) =>
    //         post.id === action.payload.id
    //             ? {
    //                   ...post,
    //                   likesCount:
    //                       post.likesCount > 1
    //                           ? post.likesCount - 1
    //                           : undefined,
    //               }
    //             : post
    //     )
    //     return { ...store, posts }
    default:
      return store;
  }
};
