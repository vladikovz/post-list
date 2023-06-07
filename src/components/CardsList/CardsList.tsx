import React from 'react';
import PostCard from '../PostCard/PostCard';

interface CardListProps {
  postsList: any[];
}
const CardsList = (props: CardListProps) => {
  const { postsList } = props;

  return (
    <div>
      {postsList.map((post) => (
        <PostCard title={post.title} username={post.username} body={post.body} />
      ))}
    </div>
  );
};

export default CardsList;
