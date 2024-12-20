import React from 'react';
import styles from './components.module.scss'

const NewsItem = ({num, category, title, isNew, data, views}) => {
  return (
    <div className={styles.newsItem}>
      <div className={styles.num}>{num}</div>
      <div className={styles.category}>[{category}]</div>
      <div className={styles.tlt}>
        <div className={styles.cont}>{title}</div>
        {isNew && <div className={styles.new}>N</div>}
      </div>
      <div className={styles.newsItemData}>{data}</div>
      <div className={styles.see}>{views}</div>
    </div>
  );
};

const NewsListInner = ({newsData}) => {
  return (
    <div>
      {newsData.map((item) => (
        <NewsItem
          key={item.num}
          num={item.num}
          category={item.category}
          title={item.title}
          isNew={item.isNew}
          data={item.date}
          views={item.views}
        />
      ))}
    </div>
  );
};

export default NewsListInner;
