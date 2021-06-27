import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import "./App.css";
import CreateAttendee from "../components/Users/CreateAttendee";
import CreateReseacher from "../components/Users/CreateResearcher";
import HeroSection from "../components/HeroSection/HeroSection";
import CreateWsConductor from "../components/Users/CreateWsConductor";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <HeroSection />
          </Route>
          <Route exact path="/user/attendee">
            <CreateAttendee />
          </Route>
          <Route exact path="/user/researcher">
            <CreateReseacher />
          </Route>
          <Route exact path="/user/wsconductor">
            <CreateWsConductor />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
