import { epoCards } from "@/data/epoCards";
import React from "react";
epoCards
import styles from "../css/EpoCard.module.scss"

export const EPOCard = () => {
  return (
    <div className={styles.epoCard}>
      {epoCards.map((card, index) => (
        <div key={index} className={`${styles.epoCardItem} ${card.cardClass}`}>
          <div className={card.bgClass}></div>
          <div className={styles.txt}>
            <div className={styles.txtKo}>{card.koText}</div>
            <div                 className={styles.txtEn}>{card.enText}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
