import React from "react";
import { api } from "./api/appwrite";
// import { server } from "./api/server";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Errorpage from "./pages/Errorpage";
import "./App.css";

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    getStatus();
  });
  const getStatus = async () => {
    try {
      const res = await api.getAccount();
      if (res.status == true) {
        setAuth(true);
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App container text-center">
      <h1 className="title">Thoughts Manager </h1>
      <Router>
        
        <Routes>
          <Route path="/" element={auth ? <Home /> : <Login />} />
          <Route path="/login" element={auth ? <Home /> : <Login />} />
          <Route path="/signup" element={auth ? <Home /> : <Signup />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
