import React, { Component } from 'react';
import { pdfDownload } from '../Reviewer/pdfDownload'
import axios from '../../services/axios'
import '../Reviewer/Reviewer.css'

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
                        <center><h3>Researches about computer science and software engineering</h3></center>
                        <br/>
                        <div className="p-44">Please protect authors rights!</div>
                        {this.state.researches.length > 0 && this.state.researches.map((value, index) => (
                            <div style={{ background: '#5c5c5c' }} key={index} className="card mb-3">
                                <div className="card-content-research">
                                    <div className="p-3">
                                        <h4>Research Paper  :0{index + 1}</h4>
                                        <h5>Auther name   :{value.fullName}</h5>
                                        <h5>Auther Email  :{value.email}</h5>
                                        <button className="btn btn-success" onClick={event => this.navigateDownload(event, value.uploads)}>View and Download Research</button>
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

export default downloadResearchs;