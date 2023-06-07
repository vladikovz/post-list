import React from 'react';
import MainPageLayout from '../layouts/MainPageLayout/MainPageLayout';
import CardsList from '../components/CardsList/CardsList';
import MessagesBox from '../components/MessagesBox/MessagesBox';
import SearchPanel from '../components/SearchPanel/SearchPanel';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.searchBox}>
        <SearchPanel />
      </section>
      <section className={styles.listBox}>
        <CardsList postsList={[]} />
      </section>
      <section className={styles.messagesBox}>
        <MessagesBox />
      </section>
    </main>
  );
};

export default MainPage;
