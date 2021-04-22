import React, { Component } from "react";
import "./App.css";
//import Main
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">{/*render main */}</div>
      </BrowserRouter>
    );
  }
}

export default App;
