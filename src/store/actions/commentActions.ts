import { CommentActionTypes } from '../types';
import { CommentAction } from '../reducers/commentsReducer';
import { Answer } from '../../interfaces/Answer';
import { Tag } from '../../interfaces/Tag';

export const addComments = (payload: { comments: Comment }): CommentAction => ({
  type: CommentActionTypes.ADD_COMMENTS,
  payload,
});

export const addAnswer = (payload: { commentId: number; answer: Answer }): CommentAction => ({
  type: CommentActionTypes.ADD_ANSWER,
  payload,
});

export const addTag = (payload: { commentId: number; tag: Tag }): CommentAction => ({
  type: CommentActionTypes.ADD_TAG,
  payload,
});
