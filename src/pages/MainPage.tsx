import React, { useEffect, useState } from 'react';
import CardsList from '../components/CardsList/CardsList';
import MessagesBox from '../components/MessagesBox/MessagesBox';
import SearchPanel from '../components/SearchPanel/SearchPanel';
import styles from './MainPage.module.css';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Api from '../api';
import { Comment } from '../interfaces/Comment';
import { Filter } from '../interfaces/Filter';
import { filterPost, resetFilterPost, setSelectedPost } from '../store/actions/postActions';
import EmptyPage from '../components/EmptyPage/EmptyPage';
import Spinner from '../components/Spinner/Spinner';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const [currentPostComments, setCurrentPostComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { filteredPost } = useTypedSelector((store) => store.posts);
  const { users } = useTypedSelector((store) => store.users);
  const { comments } = useTypedSelector((store) => store.comments);
  const { selectedPost } = useTypedSelector((store) => store.posts);

  const getPostData = async () => {
    setIsLoading(true);
    await dispatch(Api.posts.getPosts());
    await dispatch(Api.users.getUsers());
    await dispatch(Api.comments.getComments());
    setIsLoading(false);
  };

  useEffect(() => {
    getPostData();
  }, []);

  useEffect(() => {
    if (!selectedPost) return;

    const currentComments = comments.filter((comment) => comment.postId === selectedPost.id);
    currentComments.length && setCurrentPostComments(currentComments);
  }, [comments, selectedPost]);

  const handleSearch = (inputValue: string, filter: Filter) => {
    dispatch(setSelectedPost(null));
    inputValue
      ? dispatch(filterPost({ value: inputValue, filter: filter, users: users }))
      : dispatch(resetFilterPost());
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className={styles.container}>
      <section className={styles.searchBox}>
        <SearchPanel onSubmit={handleSearch} />
      </section>
      <section className={styles.listBox}>
        {filteredPost.length ? (
          <CardsList posts={filteredPost} users={users} />
        ) : (
          <EmptyPage>Nothing found</EmptyPage>
        )}
      </section>
      <section className={styles.messagesBox}>
        {selectedPost ? (
          <MessagesBox comments={currentPostComments} />
        ) : (
          <EmptyPage>Select a post</EmptyPage>
        )}
      </section>
    </main>
  );
};

export default MainPage;
