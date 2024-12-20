import React from 'react';
import styles from './components.module.scss'

const NewsButton = ({children}) => {
  return (
    <button className={styles.category}>
        {children}    
    </button>
  );
};

export default NewsButton;
