import React from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Post } from '../../interfaces/Post';
import { User } from '../../interfaces/User';
import { setSelectedPost } from '../../store/actions/postActions';
import PostCard from '../PostCard/PostCard';
import Title from '../Title/Title';

interface CardListProps {
  posts: Post[];
  users: User[];
}
const CardsList = (props: CardListProps) => {
  const { posts, users } = props;
  const dispatch = useAppDispatch();
  const { selectedPost } = useTypedSelector((store) => store.posts);

  const handleClick = (post: Post) => {
    dispatch(setSelectedPost(post));
  };

  return (
    <div>
      <Title>Posts</Title>
      {posts?.map((post) => (
        <div key={post.id} onClick={() => handleClick(post)}>
          <PostCard
            title={post.title}
            username={users.find((item) => item.id === post.userId)?.username ?? ''}
            body={post.body}
            isSelected={selectedPost?.id === post.id}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsList;
