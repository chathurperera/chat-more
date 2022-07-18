import React from 'react'
import styles from '../ChatArea/ChatArea.module.scss';
import beginChat from '../../assets/images/icons8-chat.gif'
const ChatArea = () => {
  return (
    <div className={styles.chatArea}>
      <div className={styles.startChat}>
        <div className={styles.startChatImage}>
            <img src={beginChat} alt="" />
            <div className={styles.startConversation} >Start Conversation </div>
        </div>
      </div>
    </div>
  )
}

export default ChatArea