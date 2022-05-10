import React, { useState } from "react";
import { api } from "../api/appwrite";

export default function SignUp() {
  // Declare a new state variable, which we'll call "cou"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.createAccount(email, password, name);
      var logindetails = await api.login(email, password);
      console.log(logindetails);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup_container container-md">
        <h1 className="title">Signup</h1>
      <form onSubmit={handleSubmit} id="signUp" className="signup_form ">
        <div className="form-floating">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-floating">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-floating">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            maxLength={16}
            minLength={8}
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" value="Submit" className="btn btn-primary">
          Signup
        </button>
      </form>
      <p className="askonce"> already have an account <a href="/login">login here </a></p>
    </div>
  );
}
