import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chats from "./pages/Chats";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";


const App = () => {
  const user = auth.currentUser;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/chats" element={
          <ProtectedRoute user={user}>
            <Chats />
          </ProtectedRoute> } 
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
