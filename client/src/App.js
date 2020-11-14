import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import "./App.css";
import SearchForm from "./pages/Saved";

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <SearchForm />
      </div>
    </Router>
  );
}


export default App;
