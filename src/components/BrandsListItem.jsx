import React from 'react';
import styles from './css/BrandsListItem.module.scss'
import LearnMore from './LearnMore';


const BrandsListItem = ({className, content}) => {
  const dynamicClassNameImg = styles[`${className}Img`];
  const dynamicClassNameTlt = styles[`${className}logo`];

  return (
    <div className={styles.brandsListItem}>
        <div className={`${styles.brandsListImg} ${dynamicClassNameImg}`}></div>
        <div className={styles.brandsListTxt}>
            <div className={`${styles.brandsListTxtTitle} ${dynamicClassNameTlt}`} />
            <div className='brandsListTxtContent'>{content}</div>
        </div>
        <LearnMore />            
    </div>
  );
};

export default BrandsListItem;
