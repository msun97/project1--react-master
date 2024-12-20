import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import styles from './css/LearnMore.module.scss'

const LearnMore = ({learnMoreLink}) => {
  return (
    <div className={`learn-more ${styles.container}`}>
      <a href={learnMoreLink}>Learn more</a>
      <FaPlus />
    </div>
  )
}

export default LearnMore