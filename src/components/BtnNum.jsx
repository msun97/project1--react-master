import React from 'react';
import styles from './components.module.scss'

const BtnNum = ({className, children}) => {
  return (
    <button className={`${styles.btnnum} ${className}`}>
        {children}    
    </button>
  );
};

export default BtnNum;
