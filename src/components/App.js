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
import AddSpeaker from "./EditorWorkspace/AddSpeaker";
import ViewSpeaker from "./EditorWorkspace/ViewSpeaker";
import AddNews from "./EditorWorkspace/AddNews";
import ViewNews from "./EditorWorkspace/ViewNews";
import viewResearches from "./Reviewer/viewResearches";
import UserRegistrationButton from "./Users/UserRegistrationButton/UserRegistrationButton";
import AdminNavBar from "./Admin/AdminNavBar/AdminNavBar";
import Home from "../components/Admin/Pages/Home";
import News from "./Admin/Pages/News";
import ApprovedNews from "./Admin/Pages/ApprovedNews";
import viewWorkshops from "./Reviewer/viewWorkshops";
import AttendeeLogin from "./Users/UserLogin/AttendeeLogin";
import downloadResearchs from "./DownloadPage/downloadResearchs"
import downloadWorkshops from "./DownloadPage/downloadWorkshops"
import AddNews2 from "./EditorWorkspace/AddNews2";
import ResearcherLogin from "./Users/UserLogin/ResearcherLogin";
import WsConLogin from "./Users/UserLogin/WsConLogin";
import UserNavBar from "./Users/UserNavBar/UserNavBar";
import Stats from "./Admin/Pages/Stats";
import AttendeeDashboard from "./Users/UserDashboard/AttendeeDashboard";


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
            <UserNavBar />
            <CreateAttendee />
          </Route>
          <Route path="/reviewer/viewResearches" component={viewResearches} />
          <Route exact path="/user/researcher">
            <UserNavBar />
            <CreateReseacher />
          </Route>
          <Route exact path="/user/wsconductor">
            <UserNavBar />
            <CreateWsConductor />
          </Route>
          <Route exact path="/editor/dashboard">
            <EditorDashboard />
          </Route>
          <Route path="/reviewer/viewWorkshops" component={viewWorkshops} />
          <Route path="/downloads/Research" component={downloadResearchs} />
          <Route path="/downloads/Workshops" component={downloadWorkshops} />
          <Route exact path="/sign-up">
            <UserRegistrationButton />
          </Route>
          <Route exact path="/editor/addSpeaker">
            <AddSpeaker />
          </Route>
          <Route exact path="/editor/viewSpeaker">
            <ViewSpeaker />
          </Route>
          <Route exact path="/editor/addNews">
            <AddNews />
          </Route>
          <Route exact path="/editor/addNews2">
            <AddNews2 />
          </Route>
          <Route exact path="/editor/viewNews">
            <ViewNews />
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
          <Route exact path="/user/attendee/login">
            <UserNavBar />
            <AttendeeLogin />
          </Route>
          <Route exact path="/user/researcher/login">
            <UserNavBar />
            <ResearcherLogin />
          </Route>
          <Route exact path="/user/wsconductor/login">
            <UserNavBar />
            <WsConLogin />
          </Route>
          <Route exact path="/admin/stats">
            <AdminNavBar />
            <Stats />
          </Route>
          <Route exact path="/attendee/dashboard">
            <UserNavBar />
            <AttendeeDashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
