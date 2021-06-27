import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import "./App.css";
import EditorDashboard from "./EditorWorkspace/EditorDashboard";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <h1>This is App.js File</h1>
          </Route>
          <Route exact path="/editor">
            <EditorDashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
