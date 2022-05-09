import React, { useState } from "react";
import "./ReactForms.css";

const ReactFormsPedroTech = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitForm = () => {
    var user = { firstName, lastName, email, password };
    console.log(user);
  };
  return (
    <div>
      <form>
        <label>First Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
        />
        <label>Last Name:</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => {
            setlastName(e.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <input type="button" value="Sign Up" onClick={submitForm} />
      </form>
    </div>
  );
};

export default ReactFormsPedroTech;
