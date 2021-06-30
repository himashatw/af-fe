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
        if (this.state.researches.length == 0) {
            return (
              <div className="research-content">
                <div className="research-alert">
                  <h2> There is no research paper uploads available!</h2>
                </div>
              </div>);
          }
      
        return (
            <div>
                <div className="research-content">
                    <div className="container">
                        <center><h3>Researches about computer science and software engineering</h3></center>
                        <br/>
                        <div className="p-44">Notice :Please protect authors rights!</div>
                        {this.state.researches.length > 0 && this.state.researches.map((value, index) => (
                            <div style={{ background: '#5c5c5c' }} key={index} className="card mb-3">
                                <div className="card-content-research">
                                    <div className="p-3">
                                        <h4><p>Research Paper  :0{index + 1}</p></h4>
                                        <h5 style={{ color: 'white' }}>Auther name   :{value.fullName}</h5>
                                        <h5 style={{ color: 'white' }}>Auther Email  :{value.email}</h5>
                                        <button className="btn btn-primary" onClick={event => this.navigateDownload(event, value.uploads)}>View and Download Research</button>
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