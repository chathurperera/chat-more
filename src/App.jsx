import React from "react";
import "../src/App.scss";
import ChatArea from "./components/ChatArea/ChatArea";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  return <main>
      <div>
        <ContactList />
      </div>
      <div>
        <ChatArea />
      </div>
  </main>;
};

export default App;
