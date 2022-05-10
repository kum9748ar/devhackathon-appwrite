import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/appwrite";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const res = await api.login(email, password);
     navigate('/')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login_container container-md">
      <h1 className="title">Login</h1>

      <form onSubmit={handleLogin} className="login_formw">
        <div className="form-floating">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-floating">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" value="Submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p className="askonce">
        don't have an account <a href="/signup">signup here</a>{" "}
      </p>
    </div>
  );
}
