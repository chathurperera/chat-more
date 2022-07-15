import React, { useState } from "react";
import styles from "../ContactList/ContactList.module.scss";
import userProfile from "../../assets/images/userProfile.jpg";

const ContactList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.contactList}>
      <div className={styles.contactListHeader}>
        <div className={styles.userImage}>
          <img src={userProfile} alt="user profile" />
          <div></div>
        </div>
        <div className={styles.search}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b9b9c3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactList;
