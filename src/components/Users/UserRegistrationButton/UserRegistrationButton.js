import React from 'react';
import { Link } from 'react-router-dom';
import './UserRegistration.css';

const UserRegistrationButton = () => {

    return (
        <div className="reg-container">
            <br />
            <center><h2>Welcome to ICAF 1.0 Registration</h2></center>
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <Link to="/user/attendee">
                                        <button className="addbtn addbtn_Effect">Attendee</button>
                                    </Link>
                                    <p>Required to pay payment.</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <Link to="/user/researcher">
                                        <button className="addbtn addbtn_Effect">Reseacher</button>
                                    </Link>
                                    <p>Required to upload research paper.</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <Link to="/user/wsconductor">
                                        <button className="addbtn addbtn_Effect">Workshop Conductor</button>
                                    </Link>
                                    <p>Required to add workshop title,time<br /> and data with uploads.</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserRegistrationButton;