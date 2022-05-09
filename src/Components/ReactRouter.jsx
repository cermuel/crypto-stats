import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Pages/home";
import RouteLogin from "./Pages/login";

const ReactRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/login" element={<RouteLogin />} />
      </Routes>
    </Router>
  );
};

export default ReactRouter;
