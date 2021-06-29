import React from "react";
import { Link } from "react-router-dom";

const EditorDashboard = () => {
    return (
      <div className="card-header">
      <h4>Editor Dashboard</h4>
      <div className="position-absolute top-50 start-50 translate-middle">
       <div className="row">
       <div className="col-sm-6">
       <div className="card">
       <div className="card-body"  className="shadow p-3 mb-5 bg-body rounded" >
        <h5 className="card-title">Keynote Speakers</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to="/editor/addSpeaker" className="btn btn-primary">
              Add Speakers
        </Link>
        <Link to="/editor/viewSpeaker" className="btn btn-success">
              View Speakers
        </Link>
       </div>
      </div>
     </div>

  <div className="col-sm-6">
    <div className="card">
      <div className="card-body"  className="shadow p-3 mb-5 bg-body rounded">
        <h5 className="card-title">Conference News</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to="/editor/addNews" className="btn btn-primary">
              Add News
        </Link>
        <Link to="/editor/viewNews" className="btn btn-success">
              View News
        </Link>
      </div>
    </div>
  </div>
</div>
</div>
</div>
);
};


export default EditorDashboard;