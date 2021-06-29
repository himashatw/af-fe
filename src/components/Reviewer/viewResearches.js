import React, { Component } from 'react';
import axios from '../../services/axios'
import { pdfDownload } from './pdfDownload'
 import "./Reviewer.css"

class viewResearches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            researches: [],
            fullName: '',
            email: '',
            phoneNo: '',
            uploads: ''
        }
        this.navigateDownload = this.navigateDownload.bind(this);
        this.navigateApprove = this.navigateApprove.bind(this);
        this.navigateDelete = this.navigateDelete.bind(this);

    }
    componentDidMount() {
        axios.get('/reviewer/notApprovedResearch')
            .then(res => {
                console.log(res.data)
                this.setState({ researches: res.data.data })
                console.log("researches", this.state.researches)
            })

    }

    navigateDownload(event, uploads) {
        pdfDownload(event, uploads);
    }

    navigateApprove(event, id) {
        axios.put(`reviewer/approveResearch/${id}`)
            .then(res => {
                alert("Approve Research?")
                console.log(res.data)
                window.location.reload();
            }).catch(err => {
                console.log(err);
            })
        // axios.get(`/reviewer/getResearch/${id}`).then(res => {

        //     console.log(res.data);
        //     console.log(res.data.data.uploads)

        //     const formdata = new FormData();
        //     formdata.append("researchersfullName", res.data.data.fullName);
        //     formdata.append("researchersemail", res.data.data.email);
        //     formdata.append("researchersphoneNo", res.data.data.phoneNo);
        //     formdata.append("content", res.data.data.uploads);
        //     console.log(formdata)

        //     axios.post(`/reviewer/approvedResearchers`, formdata).then(res => {
        //         console.log(res.data.data.content);
        //     }).catch(err => {
        //         console.log(err);
        //     })
        // }).catch(err => {
        //     console.log(err);
        // })
        // axios.delete(`/reviewer/deleteResearch/${id}`).then(res => {
        //     alert("Approve Research?")
        //     console.log(res.data)
        //     window.location.reload();
        // }).catch(err => {
        //     console.log(err);
        // })
    }

    navigateDelete(event, id) {
        axios.delete(`/reviewer/deleteResearch/${id}`).then(res => {
            alert("Decline Research?")
            console.log(res.data)
            window.location.reload();
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        if (this.state.researches.length == 0) {
            return (
                <div className="research-content">
                    <div class="research-alert">
                        <h3> There is no research paper available!</h3>
                    </div>
                </div>);
        }

        return (
            <div className="research-content">
                <div className="container">
                    <center><h5>View Research</h5></center>
                    {this.state.researches.length > 0 && this.state.researches.map((value, index) => (
                        <div key={index} className="card mb-3">
                            <div className="p-3">
                                <h5>FullName :{value.fullName}</h5>
                                <h5>PhoneNo  :{value.phoneNo}</h5>
                                <h5>Email    :{value.email}</h5>
                                <button className="btn btn-success" onClick={event => this.navigateDownload(event, value.uploads)}>Research paper</button>
                                <button className="btn btn-warning" onClick={event => this.navigateApprove(event, value._id)}>Approve Research</button>
                                <button className="btn btn-danger" onClick={event => this.navigateDelete(event, value._id)}>Decline Research</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default viewResearches;
