import React from 'react'
import styles from "../ContactList/ContactList.module.scss";
import userProfile from "../../assets/images/demoPP.png";

const Contact = () => {
  return (
    <div className={styles.chatCard}>
        <div className={styles.chatCardImage}>
            <img src={userProfile} alt="" />
        </div>
        <div className={styles.chatCardDetails}>
            <p className={styles.name}>Felecia Rower</p>
            <p className={styles.msgPreview}>Hi there, Im using ChatMore 😉🤞</p>
        </div>
        
    </div>
  )
}

export default Contact