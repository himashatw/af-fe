import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header/Header'
import CreateAttendee from './Users/createAttendee';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <h1>This is App.js File</h1>
                    </Route>
                    <Route path="/user/attendee">
                        <CreateAttendee/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;