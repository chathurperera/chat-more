import React, { useState } from "react";
import styles from "../ContactList/ContactList.module.scss";
import UserChat from "../UserChat/UserChat";

const ChatsList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.chatsList}>
      <div className={styles.contactListBody}>
        <h3>Chats</h3>
        <UserChat />
        <UserChat />
        <UserChat />
      </div>
    </div>
  );
};

export default ChatsList;
