import React, { Component } from "react";
import { getAllSubmissions } from "./CoCreateApi";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      //need to add routes here to other pages
      <div>
        <Route
          exact
          path="/homepage"
          render={props => <HomePage {...props} />}
        />
        <Route />
      </div>
    );
  }
}
export default App;
