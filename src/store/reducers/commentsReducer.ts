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
    default:
      return store;
  }
};
