import React, { Component } from "react";
import { getAllSubmissions } from "./CoCreateApi";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    const getAllSubmissionsPromise = getAllSubmissions();

    getAllSubmissionsPromise
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">CoCreate Network</h1>
        </header>
        <p className="App-intro">
          Are you submitting a project or voting on a project?
        </p>
      </div>
    );
  }
}

export default App;
