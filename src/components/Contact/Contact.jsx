import React from "react";
import styles from "../ContactList/ContactList.module.scss";
import userProfile from "../../assets/images/demoPP.png";

const Contact = ({ contact, setSelectedChat }) => {
  return (
    <div className={styles.chatCard} onClick={() => setSelectedChat(contact)}>
      <div className={styles.chatCardImage}>
        <img src={contact.imageURL} alt="" />
      </div>
      <div className={styles.chatCardDetails}>
        <p className={styles.name}>{contact.name}</p>
        <p className={styles.msgPreview}>{contact.bio}</p>
      </div>
    </div>
  );
};

export default Contact;
