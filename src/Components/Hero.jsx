import React, { useState, useRef } from "react";

const Hero = () => {
  const [heroName, setheroName] = useState("");
  const showName = () => {
    setheroName("");
  };
  const clearInput = () => {
    input.current.value = "";
  };
  const input = useRef("");
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setheroName(event.target.value)}
        ref={input}
      />
      <h1>{heroName}</h1>
      <button onClick={showName}>CLEAR</button>
    </div>
  );
};

export default Hero;
