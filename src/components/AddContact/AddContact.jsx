import React from "react";
import styles from "../AddContact/AddContact.module.scss";

const AddContact = () => {
  return (
    <div className={styles.addContact}>
      <h4>Enter the Email Address of the person you wish to chat</h4>
      <div className={styles.inputWrap}>
        <input type="email" name="" id="" />
        <button>Add</button>
      </div>
    </div>
  );
};

export default AddContact;
