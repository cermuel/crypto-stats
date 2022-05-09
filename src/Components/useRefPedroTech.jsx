import React, { useRef } from "react";

const USEREF = () => {
  const input = useRef("");
  const ChangePlaceholder = () => {
    input.current.placeholder = "OG INPUT YOUR NAME NA";
  };
  return (
    <div>
      <label>Full Name: </label>
      <input type="text" ref={input} placeholder="Input Your Name" />
      <br />
      <button onClick={ChangePlaceholder}>Change Placeholder</button>
    </div>
  );
};

export default USEREF;
