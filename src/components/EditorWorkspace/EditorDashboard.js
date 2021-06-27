import React from "react";


const EditorDashboard = () => {
    return (
        <div className="row"> 
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Keynote Speakers</span>
            </div>
            <div className="card-action">
            <Link to="/addSpeaker" >
                Add KeyNote Speakers
            </Link>
            <Link to="/viewSpeaker" >
                View KeyNote Speakers
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
};


export default EditorDashboard;