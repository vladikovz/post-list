import { Answer } from './Answer';
import { Tag } from './Tag';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  answers: Answer[] | null;
  tags: Tag[] | null;
}
