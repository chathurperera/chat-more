import React from "react";
import "../src/App.scss";
import userProfile from "../src/assets/images/userProfile.jpg";
import ChatArea from "./components/ChatArea/ChatArea";
import ChatsList from "./components/ChatsList/ChatsList";
import ContactList from "./components/ContactList/ContactList";
import styles from "../src/components/ContactList/ContactList.module.scss";

const App = () => {
  return (
    <main>
      <aside>
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
              strokeWidth="2"
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
        <div className="sidebar-container">
          <ChatsList />
          <ContactList />
        </div>
      </aside>
      <div>
        <ChatArea />
      </div>
    </main>
  );
};

export default App;
