import React, { Component } from 'react';
import axios from '../../services/axios'
import { pdfDownload } from './pdfDownload'
import "./Reviewer.css"

class viewResearches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      researches: [],
      fullName: "",
      email: "",
      phoneNo: "",
      uploads: "",
    };
    this.navigateDownload = this.navigateDownload.bind(this);
    this.navigateApprove = this.navigateApprove.bind(this);
    this.navigateDelete = this.navigateDelete.bind(this);
  }
  componentDidMount() {
    axios.get("/reviewer/notApprovedResearch").then((res) => {
      console.log(res.data);
      this.setState({ researches: res.data.data });
      console.log("researches", this.state.researches);
    });
  }

  navigateDownload(event, uploads) {
    pdfDownload(event, uploads);
  }

  navigateApprove(event, id) {
    alert("Approve Research?")
    axios.put(`reviewer/approveResearch/${id}`)
      .then(res => {
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

    //     axios.post(/reviewer/approvedResearchers, formdata).then(res => {
    //         console.log(res.data.data.content);
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }).catch(err => {
    //     console.log(err);
    // })
    // axios.delete(/reviewer/deleteResearch/${id}).then(res => {
    //     alert("Approve Research?")
    //     console.log(res.data)
    //     window.location.reload();
    // }).catch(err => {
    //     console.log(err);
    // })
  }

  navigateDelete(event, id) {
    alert("Decline Research?")
    axios.delete(`/reviewer/deleteResearch/${id}`).then(res => {
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
          <div className="research-alert">
            <h2> There is no research paper uploads available!</h2>
          </div>
        </div>);
    }

    return (
      <div className="research-content">
        <div className="container">
          <center><h3>Research Paper Uploads</h3></center>
          <br />
          <h6 style={{ color: 'red' }}>
            Notice to reviewers: Approve research Papers that have only relevant content for the conference.
          </h6>
          {this.state.researches.length > 0 && this.state.researches.map((value, index) => (
            <div key={index} className="card mb-3">
              <div className="card-content-research">
                <div className="p-3">
                  <h4><p>🧐Research No : 0{index + 1}</p></h4>
                  <h5>FullName :{value.fullName}</h5>
                  <h5>PhoneNo  :{value.phoneNo}</h5>
                  <h5>Email    :{value.email}</h5>
                  <button className="btn btn-warning" onClick={event => this.navigateDownload(event, value.uploads)}>Research paper</button>
                  <button className="btn btn-success" style={{ marginLeft: "2%" }} onClick={event => this.navigateApprove(event, value._id)}>Approve Research</button>
                  <button className="btn btn-danger" style={{ marginLeft: "2%" }} onClick={event => this.navigateDelete(event, value._id)}>Decline Research</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default viewResearches;
