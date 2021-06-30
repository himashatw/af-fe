import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../../services/axios";

const AdminLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginBtnHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("/adminlogin", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          history.push("/admin");
        } else {
          alert("Invalid Email and Password");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="container">
      <br />
      <div className="card" style={{ width: "50%", marginLeft: "25%" }}>
        <div className="card-header">
          <h4>Admin Login</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={loginBtnHandler}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
