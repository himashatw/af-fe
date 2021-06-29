import React, { Component } from 'react';
import { pdfDownload } from '../Reviewer/pdfDownload'
import axios from '../../services/axios'
import './dowloadPage.css'

class downloadResearchs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            researches: []
        }
        this.navigateDownload = this.navigateDownload.bind(this);
    }
    componentDidMount() {
        axios.get('/reviewer/approvEDResearches')
            .then(res => {
                console.log(res.data)
                this.setState({ researches: res.data.data })
                console.log("researches", this.state.researches)
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
                        <center><h4>Researches about computer science and software engineering</h4></center>
                        <div className="p-44">Please protect authors rights!</div>
                        {this.state.researches.length > 0 && this.state.researches.map((value, index) => (
                            <div key={index} className="card mb-3">
                                <div className="p-3">
                                    <h5>Auther name :{value.fullName}</h5>
                                    <h5>Auther Email    :{value.email}</h5>
                                    <button className="btn btn-success" onClick={event => this.navigateDownload(event, value.uploads)}>View and Download Research</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default downloadResearchs;