import React from 'react';
import { Link } from 'react-router-dom';

const UserRegistrationButton = () => {

    return (
        <div className="container">
            <br />
            <center><h2>Welcome to ICAF 1.0 Registration</h2></center>
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <Link to="/user/attendee">
                                        <button className="btn btn-primary">Attendee</button>
                                    </Link>
                                    <p>abcd</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <Link to="/user/researcher">
                                        <button className="btn btn-primary">Reseacher</button>
                                    </Link>
                                    <p>abcd</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <Link to="/user/wsconductor">
                                        <button className="btn btn-primary">Workshop Conductor</button>
                                    </Link>
                                    <p>abcd</p>
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