import { brandNews } from '@/data/brandNews'
import React from 'react'


import styles from '../css/BrandNewsCard.module.scss'

const BrandNewsCard = () => {
  return (
    <div className={styles.brandNewsCard}>
      {brandNews.map((item, index) => (
        <div key={index} className={styles.brandnewsItem}>
          <div className={`${styles.brandnewsItemImg} ${item.imgClass}`}></div>  {/* 동적으로 클래스 이름을 적용 */}
          <div className={styles.brandnewsItemTxt}>
            <div className={styles.brandnewsItemTxtTag}>{item.tag}</div>
            <div className={styles.brandnewsItemTxtCont}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BrandNewsCard