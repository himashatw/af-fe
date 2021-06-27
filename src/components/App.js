import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import "./App.css";
import CreateAttendee from "./Users/CreateAttendee";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <h1>This is App.js File</h1>
          </Route>
          <Route exact path="/user/attendee">
            <CreateAttendee />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
