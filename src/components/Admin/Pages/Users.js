import React, { useState } from "react";
import axios from "../../../services/axios";

const Users = () => {
  const [editorButton, setEditorButton] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const editorBtnHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("/addeditor", {
        fullName: fullName,
        email: email,
        phoneNo: phoneNo,
        password: password,
      })
      .then((result) => {
        alert("successfull");
      })
      .catch((error) => {
        alert("unsuccessfull");
      });
  };
  const reviewerBtnHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("/addreviewer", {
        fullName: fullName,
        email: email,
        phoneNo: phoneNo,
        password: password,
      })
      .then((result) => {
        alert("successfull");
      })
      .catch((error) => {
        alert("unsuccessfull");
      });
  };
  return (
    <div className="usermanagement">
      <div className="container mt-2 p-1" style={{ border: "1px solid black" }}>
        <center>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={() => setEditorButton(true)}
          >
            Add Editor
          </button>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={() => setEditorButton(false)}
          >
            Add Reviewer
          </button>
        </center>
      </div>
      <div className="container mt-4 p-4" style={{ border: "1px solid black" }}>
        <div className="container" style={{ maxWidth: "400px" }}>
          <form className="mt-3">
            <center>
              {editorButton ? <h3>Add Editor</h3> : <h3>Add Reviewer</h3>}
            </center>
            <div className="mb-3 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ex : Mark Suckerburg"
                onChange={(event) => setFullName(event.target.value)}
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmailw1"
                aria-describedby="emailHelp"
                placeholder="Ex : marks@example.com"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputdEmail1"
                aria-describedby="emailHelp"
                placeholder="Ex : +1234566774"
                onChange={(event) => setPhoneNo(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <center>
              {editorButton ? (
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={editorBtnHandler}
                >
                  Submit Editor
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={reviewerBtnHandler}
                >
                  Submit Reviewer
                </button>
              )}
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Users;
