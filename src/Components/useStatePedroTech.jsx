import React, { useState } from "react";
import { usernameHeader } from "../Container.style";

const useStatePedroTech = () => {
  const [name, setname] = useState("Drizzle");
  const [number, setnumber] = useState(0);
  const [username, setusername] = useState("");

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <button
          onClick={() => {
            setname("CERMUEL");
          }}
        >
          Show the GOAT'S NAME
        </button>
      </div>
      <br />
      <hr />
      <br />
      <span>{number}</span>
      <br />
      <button
        onClick={() => {
          setnumber(number + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setnumber(number - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setnumber(number * 0);
        }}
      >
        Reset
      </button>
      <br />
      <br />
      <hr />
      <br />
      <input
        type="text"
        placeholder="Input Username"
        onChange={(event) => {
          setusername(event.target.value);
        }}
      />
      <usernameHeader>{username}</usernameHeader>
    </div>
  );
};

export default useStatePedroTech;
