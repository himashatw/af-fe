import React from "react";

function Home() {
  return (
    <div className="homeadmin">
      <div className="container mt-2" style={{ border: "1px solid black" }}>
        <center>
          <h1 style={{ fontSize: "1.5rem", color: "black" }}>
            Admin Dashboard
          </h1>
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
                  <h1 className="card-text">View Pending Posts</h1>
                  <i className="fas fa-users fa-2x"></i>
                </div>
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
                  <h1 className="card-text">View Approved Posts</h1>
                  <i className="fas fa-user-friends fa-2x"></i>
                </div>
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
                  <h1 className="card-text">Add Users</h1>
                  <i className="fas fa-laptop-house fa-2x"></i>
                </div>
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
                  <h1 className="card-text">View Keynote Speakers</h1>
                  <i className="fas fa-paperclip fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <center>
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div
                  className="container"
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <h1 className="card-text">View Statistics</h1>
                  <i className="fas fa-paperclip fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Home;
