import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import "./App.css";
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
        </Switch>
      </div>
    </Router>
  );
};

export default App;
