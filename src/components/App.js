<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header/Header'
import viewResearches from './Reviewer/viewResearches'

const App = () => {
    return (
        <Router>
            <div>
                <Header/> 
                <Switch>
                    <Route exact path="/">                     
                    <HeroSection />
                    </Route>
                    <Route path="/viewResearches" component ={viewResearches}/>
                    <Route exact path="/user/attendee">
                    <CreateAttendee />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
=======
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import "./App.css";
import CreateAttendee from "./Users/CreateAttendee";
import HeroSection from "../components/HeroSection/HeroSection";


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
        </Switch>
      </div>
    </Router>
  );
>>>>>>> master
};

export default App;
