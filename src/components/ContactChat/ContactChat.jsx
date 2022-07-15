import React from 'react'
import styles from "../ContactList/ContactList.module.scss";
import userProfile from "../../assets/images/userProfile.jpg";

const ContactChat = () => {
  return (
    <div className={styles.chatCard}>
        <div className={styles.chatCardImage}>
            <img src={userProfile} alt="" />
            <div></div>
        </div>
        <div className={styles.chatCardDetails}>
            <p className={styles.name}>Felecia Rower</p>
            <p className={styles.msgPreview}>I will purchase it for sure.</p>
        </div>
        <div></div>
    </div>
  )
}

export default ContactChat