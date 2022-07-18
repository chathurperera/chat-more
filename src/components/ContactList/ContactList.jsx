import React, { useState } from "react";
import styles from "../ContactList/ContactList.module.scss";
import userProfile from "../../assets/images/userProfile.jpg";
import Contact from "../Contact/Contact";


const ContactList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.contactList}>
      <div className={styles.contactListBody}>
        <h3>Contacts</h3>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
};

export default ContactList;
