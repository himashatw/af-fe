import React, { Component } from 'react';
import { Link } from "react-router-dom";

class reviewerDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : ''
        }

    }
    render() {
        return (
            <div className="container">
                <center><h3>Reviewer Dashboard</h3></center>
                <Link to="/reviewer/viewResearches" className="list-group-item list-group-item-action">
                    Approve Research papers
                </Link>
                <Link to="/reviewer/viewWorkshops" className="list-group-item list-group-item-action">
                    Approve Workshops
                </Link>
            </div>
        );
    }
}

export default reviewerDashboard;