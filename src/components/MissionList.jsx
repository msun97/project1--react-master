import React from 'react';
import styles from './css/MisionList.module.scss'


const MissionList = ({className, title, content}) => {
  const dynamicClassName = styles[`${className}Img`];

  return (
    <div className={`${styles.missionListItem} ${className}`}>
        <div className={`${styles.missionListImg} ${dynamicClassName}`}></div>
        <div className={styles.missionListTxt}>
            <div className={`${styles.missionListTxtTitle}`}>{title}</div>
            <div className={`${styles.missionListTxtContent}`}>{content}</div>
        </div>            
    </div>
  );
};

export default MissionList;
