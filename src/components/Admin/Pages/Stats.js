import React, { useEffect, useState } from "react";
import axios from "../../../services/axios";

const Stats = () => {
  const [statObj, setStatObj] = useState({});
  useEffect(async () => {
    await axios.get("/countall").then((respone) => {
      setStatObj(respone.data.countObj);
    });
  }, []);

  return (
    <div className="stats">
      <div className="container mt-2" style={{ border: "1px solid black" }}>
        <center>
          <h1 style={{ fontSize: "1.5rem" }}>Stats</h1>
        </center>
      </div>
      <div className="container mt-5" style={{ border: "1px solid black" }}>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div
                  className="container"
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <h5 className="card-title">Attendees</h5>
                  <i className="fas fa-users fa-2x"></i>
                </div>
                <center>
                  <h1 className="card-text mt-3">{statObj.attendees}</h1>
                </center>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div
                  className="container"
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <h5 className="card-title">Researchers</h5>
                  <i className="fas fa-user-friends fa-2x"></i>
                </div>
                <center>
                  <h1 className="card-text mt-3">{statObj.researchers}</h1>
                </center>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div
                  className="container"
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <h5 className="card-title">Workshops</h5>
                  <i className="fas fa-laptop-house fa-2x"></i>
                </div>
                <center>
                  <h1 className="card-text mt-3">{statObj.workshops}</h1>
                </center>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div
                  className="container"
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <h5 className="card-title">Research Papers</h5>
                  <i className="fas fa-paperclip fa-2x"></i>
                </div>
                <center>
                  <h1 className="card-text mt-3">{statObj.papers}</h1>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
