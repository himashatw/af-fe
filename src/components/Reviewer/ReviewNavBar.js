import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { FcSearch } from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
class ReviewNavBar extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            email: null
        }
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">ICAF Reviewer</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/reviewer/viewResearches">Review Research</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/reviewer/viewWorkshops">Review Workshops</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <a className="btn btn-outline-success my-2 my-sm-0" href="/">Log out</a>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
    export default ReviewNavBar;