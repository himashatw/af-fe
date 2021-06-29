import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import "./App.css";
import CreateAttendee from "../components/Users/CreateAttendee";
import CreateReseacher from "../components/Users/CreateResearcher";
import EditorDashboard from "./EditorWorkspace/EditorDashboard";
import CreateAttendee from "./Users/CreateAttendee";
import HeroSection from "../components/HeroSection/HeroSection";
import viewResearches from "./Reviewer/viewResearches";
import CreateWsConductor from "../components/Users/CreateWsConductor";
import UserRegistrationButton from "./Users/UserRegistrationButton/UserRegistrationButton";
import AddSpeaker from "./EditorWorkspace/AddSpeaker";
import ViewSpeaker from "./EditorWorkspace/ViewSpeaker";
import AdminNavBar from "./Admin/AdminNavBar/AdminNavBar";
import Home from "../components/Admin/Pages/Home";
import News from "./Admin/Pages/News";
import ApprovedNews from "./Admin/Pages/ApprovedNews";
import viewWorkshops from "./Reviewer/viewWorkshops";


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Header />
            <HeroSection />
          </Route>
          <Route exact path="/user/attendee">
            <CreateAttendee />
          </Route>
          <Route path="/viewResearches" component={viewResearches} />
          <Route exact path="/user/researcher">
            <CreateReseacher />
          </Route>
          <Route exact path="/user/wsconductor">
            <CreateWsConductor />
          </Route>
          <Route exact path="/editor/dashboard">
            <EditorDashboard />
          </Route>
          <Route path="/viewWorkshops" component ={viewWorkshops}/>
          <Route exact path="/sign-up">
            <UserRegistrationButton />
          </Route>
          <Route exact path="/editor/addSpeaker">
            <AddSpeaker />
          </Route>
          <Route exact path="/editor/viewSpeaker">
            <ViewSpeaker />
          </Route>
          <Route exact path="/admin">
            <AdminNavBar />
            <Home />
          </Route>
          <Route exact path="/admin/news">
            <AdminNavBar />
            <News />
          </Route>
          <Route exact path="/admin/approvednews">
            <AdminNavBar />
            <ApprovedNews />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
