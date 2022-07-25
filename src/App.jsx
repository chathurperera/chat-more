import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chats from "./pages/Chats";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/chats" element={<Chats />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
