import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../DownloadPage/DownloadDashBoard.css'

const downloadDashboard = () => {

    return (
        <div className="dash-usha-container">
            <br />
            <center><h2>Welcome to ICAF 1.0 Download Page</h2></center>
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <Link to="/downloads/Research">
                                        <button className="ushan addbtn_Effect">Research Paper Download</button>
                                    </Link>
                                    <p style={{ color: 'white' }}>View Research papers relevant to conference.</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <Link to="/downloads/Workshops">
                                        <button className="ushan addbtn_Effect">Workshop Details</button>
                                    </Link>
                                    <p style={{ color: 'white' }}>View Workshop details relevant to conference.</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default downloadDashboard;