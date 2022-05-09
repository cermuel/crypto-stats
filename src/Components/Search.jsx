import React, { useState } from "react";
import "./SearchStyle.css";
import JSONDATA from "../MOCK_DATA.json";

const Search = () => {
  const [search, setsearch] = useState("");
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setsearch(e.target.value);
        }}
      />
      {JSONDATA.filter((value) => {
        if (search == "") {
          return value;
        } else if (
          value.first_name.toLowerCase().includes(search.toLowerCase())
        ) {
          return value;
        }
      }).map((value, key) => {
        return (
          <div className="user" key={key}>
            <h2>{value.first_name}</h2>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
