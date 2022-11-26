import React from "react";
import "./App.css";
import Home from "./Components/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import AddPost from "./Components/AddPost";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="addPost" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
