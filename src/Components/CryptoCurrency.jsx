import React from "react";
import "./CryptoCurrency.style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Crypto Routes/Main";
import Currencies from "./Crypto Routes/Currencies";

const CryptoCurrency = () => {
  return (
    <body>
      <div className="body">
        <header>
          <h1>CRYPTO STATS</h1>
        </header>
        <Router>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/currency/:id" element={<Currencies />}></Route>
          </Routes>
        </Router>
      </div>
    </body>
  );
};

export default CryptoCurrency;
