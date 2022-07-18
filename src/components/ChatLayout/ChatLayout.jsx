import React from "react";
import styles from "../ChatLayout/ChatLayout.module.scss";
import profileImage from "../../assets/images/demoPP2.png";
const ChatLayout = () => {
  return (
    <div className={styles.chatLayout}>
      <div className={styles.chatLayoutHeader}>
        <div className={styles.profileImage}>
          <img src={profileImage} alt="profile image" />
          <span className={styles.onlineIndicator}></span>
          <p>Sal Piggee</p>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
