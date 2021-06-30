import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../DownloadPage/DownloadDashBoard.css'

const reviewerDashboard = () => {

    return (
        <div className="dash-usha-container">
            <br />
            <center><h2>Welcome Back Reviewer!</h2></center>
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <Link to="/reviewer/viewResearches">
                                        <button className="ushan addbtn_Effect">Approve Research Papers</button>
                                    </Link>
                                    <p style={{ color: 'white' }}>Approve Research papers relevant to conference.</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <Link to="/reviewer/viewWorkshops">
                                        <button className="ushan addbtn_Effect">Approve Workshops</button>
                                    </Link>
                                    <p style={{ color: 'white' }}>Approve Workshop details relevant to conference.</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default reviewerDashboard;