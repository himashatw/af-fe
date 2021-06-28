import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminHome from "../components/Admin/AdminHome/AdminHome";
import AdminNews from "../components/Admin/AdminNews/AdminNews";

const AdminRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={AdminHome} />
        <Route exact path="admin/news" component={AdminNews} />
      </Switch>
    </Router>
  );
};

export default AdminRoutes;
