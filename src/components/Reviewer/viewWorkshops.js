import React, { Component } from 'react';
import axios from '../../services/axios'
import { pdfDownload } from './pdfDownload'
import { pdfDownload } from './pdfDownload'
import "./Reviewer.css"

class viewWorkshops extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workshops: []
        }
        this.navigateDownload = this.navigateDownload.bind(this);
        this.navigateApprove = this.navigateApprove.bind(this);
        this.navigateDelete = this.navigateDelete.bind(this);
    }

    componentDidMount() {
        axios.get('/reviewer/notApprovedWorkshop').then(res => {
            console.log(res.data.data);
            this.setState({ workshops: res.data.data })
            console.log("workshops=", this.state.workshops)
        })
    }

    navigateDownload(event, uploads) {
        pdfDownload(event, uploads);
    }
    navigateApprove(event, id) {
        axios.put(`reviewer/approveWorkshop/${id}`)
            .then(res => {
                alert("Approve Workshop?")
                console.log(res.data)
                window.location.reload();
            }).catch(err => {
                console.log(err);
            })
    }
    navigateDelete(event, id) {
        axios.delete(`/reviewer/deleteWorkshops/${id}`).then(res => {
            alert("Decline Workshop?")
            console.log(res.data)
            window.location.reload();
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        if (this.state.workshops.length == 0) {
            return (
                <div className="research-content">
                    <div className="research-alert">
                        <h2>There is no Workshop uploads available.</h2>
                    </div>
                </div>);
        }
        return (
            <div className="research-content">
                <div className="container">
                    <center><h3>Workshop Uploads</h3></center>
                    <br />
                    <h6 style={{ color: 'red' }}>
                        Notice to reviewers: Approve workshops that have only relevant for the conference.
                    </h6>
                    {this.state.workshops.length > 0 && this.state.workshops.map((value, index) => (
                        <div key={index} className="card mb-3">
                            <div className="card-content-research">
                                <div className="p-3">
                                <h4><p>Workshop No : 0{index + 1}</p></h4>
                                    <h5 style={{ color: 'white' }}>FullName :{value.fullName}</h5>
                                    <h5 style={{ color: 'white' }}>PhoneNo  :{value.phoneNo}</h5>
                                    <h5 style={{ color: 'white' }}>Email    :{value.email}</h5>
                                    <h5 style={{ color: 'white' }}>Title of workshop:{value.workshopTitle}</h5>
                                    <h5 style={{ color: 'white' }}>Workshop Data :{value.workshopData}</h5>
                                    <h5 style={{ color: 'white' }}>Time of Workshop:{value.workshopTime}</h5>
                                    <button className="btn btn-light" onClick={event => this.navigateDownload(event, value.uploads)}>WorkShop Details</button>
                                    <button className="btn btn-primary" style={{ marginLeft: "2%" }} onClick={event => this.navigateApprove(event, value._id)}>Approve WorkShop</button>
                                    <button className="btn btn-danger" style={{ marginLeft: "2%" }} onClick={event => this.navigateDelete(event, value._id)}>Decline WorkShop</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default viewWorkshops;