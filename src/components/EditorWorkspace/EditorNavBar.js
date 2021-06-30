import React from 'react';
import { Link } from 'react-router-dom';

const EditorNavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">CMS</a>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/editor/dashboard" className="nav-link" >Dashboard </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/editor/addSpeaker" className="nav-link" >Add KeyNote Speakers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/editor/viewSpeaker" className="nav-link" >View KeyNote Speakers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/editor/addNews2" className="nav-link" >Add News</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/editor/viewNews" className="nav-link" >View News</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default EditorNavBar;
