import React from "react";
import { Link } from "react-router-dom";
import "./UserRegistration.css";

const UserLoginButton = () => {
  return (
    <div className="reg-container">
      <br />
      <center>
        <h2>Welcome to ICAF 1.0 Login</h2>
      </center>
      <div>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <div>
                  <Link to="/admin/login">
                    <button className="addbtn addbtn_Effect">
                      Admin Login
                    </button>
                  </Link>
                </div>
              </td>
              <td>
                <div>
                  <Link to="/">
                    <button className="addbtn addbtn_Effect">
                      Reviewer Login
                    </button>
                  </Link>
                </div>
              </td>
              <td>
                <div>
                  <Link to="/editor/login">
                    <button className="addbtn addbtn_Effect">
                      Editor Login
                    </button>
                  </Link>
                </div>
              </td>
              <td>
                <div>
                  <Link to="/user/attendee/login">
                    <button className="addbtn addbtn_Effect">
                      Attendee Login
                    </button>
                  </Link>
                </div>
              </td>
              <td>
                <div>
                  <Link to="/user/researcher/login">
                    <button className="addbtn addbtn_Effect">
                      Reseacher Login
                    </button>
                  </Link>
                </div>
              </td>
              <td>
                <div>
                  <Link to="/user/wsconductor/login">
                    <button className="addbtn addbtn_Effect">
                      Workshop Conductor Login
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserLoginButton;
