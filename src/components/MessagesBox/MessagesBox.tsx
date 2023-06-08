import React, { useState } from 'react';
import { Comment } from '../../interfaces/Comment';
import {
  Button,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Tooltip,
} from '@mui/material';
import InputBox from './InputBox/InputBox';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addAnswer, addTag } from '../../store/actions/commentActions';
import { Answer } from '../../interfaces/Answer';
import { v4 as uuidv4 } from 'uuid';
import styles from './MessagesBox.module.css';
import AddIcon from '@mui/icons-material/Add';
import TagBox from './TagBox/TagBox';
import { Tag } from '../../interfaces/Tag';
import Title from '../Title/Title';

interface MessagesBoxProps {
  comments: Comment[];
}
const MessagesBox = (props: MessagesBoxProps) => {
  const { comments } = props;
  const [replyId, setReplyId] = useState<number | null>(null);
  const [tagId, setTagId] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const handleReplyClick = (id: number) => {
    setTagId(null);
    setReplyId(id);
  };

  const handleTagClick = (id: number) => {
    setReplyId(null);
    setTagId(id);
  };

  const addNewAnswer = (value: string) => {
    const newAnswer: Answer = {
      body: value,
      id: uuidv4(),
    };
    replyId && dispatch(addAnswer({ answer: newAnswer, commentId: replyId }));
  };

  const addNewTag = (value: string) => {
    const newTag: Tag = {
      body: value,
      id: uuidv4(),
    };
    tagId && dispatch(addTag({ tag: newTag, commentId: tagId }));
  };

  return (
    <>
      <Title>Comments</Title>
      <List sx={{ width: '100%' }}>
        {comments.map((comment) => (
          <div className={styles.list} key={comment.id}>
            <ListItem
              sx={{ backgroundColor: '#bcaaa4', flexDirection: 'column', borderRadius: '10px' }}
            >
              <ListItemText primary={comment.name} secondary={comment.body} />
              <div className={styles.controls}>
                {comment.id !== tagId && (
                  <Tooltip title="Add tags">
                    <IconButton onClick={() => handleTagClick(comment.id)}>
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                )}

                {comment.id !== replyId && (
                  <Button
                    onClick={() => handleReplyClick(comment.id)}
                    sx={{ alignSelf: 'flex-end' }}
                  >
                    Reply
                  </Button>
                )}
              </div>
              {comment.tags && (
                <>
                  <Divider sx={{ width: '100%', margin: '10px' }} />
                  <Stack
                    sx={{ flexWrap: 'wrap', gap: '3px', justifyContent: 'center' }}
                    direction="row"
                    spacing={1}
                  >
                    {comment.tags.map((tag) => (
                      <Chip key={tag.id} label={'#' + tag.body} />
                    ))}
                  </Stack>
                </>
              )}
            </ListItem>
            <Stack
              sx={{ margin: '10px 20px' }}
              alignItems={'flex-start'}
              // direction="column"
              spacing={1}
            >
              {comment.answers?.map((answer) => (
                <Chip key={answer.id} label={answer.body} />
              ))}
            </Stack>
            {comment.id === replyId && <InputBox onSubmit={addNewAnswer} />}
            {comment.id === tagId && <TagBox onSubmit={addNewTag} />}
          </div>
        ))}
      </List>
    </>
  );
};

export default MessagesBox;
