import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../Reviewer/Reviewer.css'

class downloadDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    render() {
        return (
            <div className="container">
                <center><h3>Download Dashboard</h3></center>
                <Link to="/downloads/Research" className="list-group-item list-group-item-action">
                     Research papers Download
                </Link>
                <Link to="/downloads/Workshops" className="list-group-item list-group-item-action">
                    See Workshops Details
                </Link>
            </div>
        );
    }
}

export default downloadDashboard;