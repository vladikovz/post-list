import { Answer } from '../../interfaces/Answer';
import { Tag } from '../../interfaces/Tag';
import { CommentAction } from '../reducers/commentsReducer';
import { CommentActionTypes } from '../types';

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
