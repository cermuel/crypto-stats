import React, { useState } from "react";
import "./loginform.css";

const Loginform = () => {
  const validUsername = "cermuel";
  const validPassword = "12345678";

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loggedIn, setloggedIn] = useState(false);

  const loginValidity = () => {
    if (username == validUsername && password == validPassword) {
      setloggedIn(true);
    }
  };
  return (
    <div>
      <label>Username:</label>
      <input
        type="text"
        required
        onChange={(event) => {
          setusername(event.target.value);
        }}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        required
        onChange={(event) => {
          setpassword(event.target.value);
        }}
      />
      <br />
      <button onClick={loginValidity}>Submit</button>

      {loggedIn ? (
        <h1 className="success">Login Succesful</h1>
      ) : (
        <h1 className="failed">Login Failed</h1>
      )}
    </div>
  );
};

export default Loginform;
