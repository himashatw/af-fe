import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { FcSearch } from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
class Question extends React.Component {
    constructor(props) {
        
        super(props);
        this.state = {
            email :null
        }
    }

    render() {
        if (this.state.email == null) {
            return (
                <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">CMS Reviewer</a>
                        <button className="navbar-toggler" type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/sign-up">Review Research</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Review Workshops</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            );

        } else {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">CMS Reviewer</a>
                            <button className="navbar-toggler" type="button">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" >
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/sign-up">Review Research</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Review Workshops</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                );
        }
    }
}
export default Question;