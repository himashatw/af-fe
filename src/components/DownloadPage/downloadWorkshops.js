import React, { Component } from 'react';
import { pdfDownload } from '../Reviewer/pdfDownload'
import axios from '../../services/axios'
import '../Reviewer/Reviewer.css'

class downloadWorkshops extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workshops: []
        }
        this.navigateDownload = this.navigateDownload.bind(this);
    }

    componentDidMount() {
        axios.get('/reviewer/approvEDWorkshopes')
            .then(res => {
                console.log(res.data)
                this.setState({ workshops: res.data.data })
                console.log("workshops", this.state.workshops)
            })

    }
    navigateDownload(event, uploads) {
        pdfDownload(event, uploads);
    }
    render() {
        return (
            <div>
                <div className="research-content">
                    <div className="container">
                        <center><h3>Workshops about computer science and software engineering</h3></center>
                        <br/>
                        {this.state.workshops.length > 0 && this.state.workshops.map((value, index) => (
                            <div key={index} className="card mb-3">
                                <div className="card-content-research">
                                    <div className="p-3">
                                        <h4>Workshop No     : 0{index + 1}</h4>
                                        <h5>Workshop Title  :{value.workshopTitle}</h5>
                                        <h5>Workshop Date  :{value.workshopData}</h5>
                                        <h5>Workshop Time  :{value.workshopTime}</h5>
                                        <button className="btn btn-success" onClick={event => this.navigateDownload(event, value.uploads)}>View and Download Workshop Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        );
    }
}

export default downloadWorkshops;