import React, { Component } from "react";
import axios from "../../services/axios";

class viewResearches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      researches: [],
    };
    this.navigateDownload = this.navigateDownload.bind(this);
  }
  componentDidMount() {
    axios.get("/reviewer/getResearchPapers").then((res) => {
      console.log(res.data);
      this.setState({ researches: res.data.data });
      console.log("researches", this.state.researches);
    });
  }

  navigateDownload(event, uploads) {
    event.preventDefault();
    const url = uploads.data;
    console.log(url);
    let base64data = url.toString("base64");
    console.log(base64data);
    console.log(base64data.type);
    let buff = new Buffer(base64data, "base64");
    try {
      fs.writeFile("stack-abuse-logo-out.png", base64data);
      console.log(
        "Base64 image data converted to file: stack-abuse-logo-out.png"
      );
    } catch (err) {
      if (err) {
        console.error(err.message);
      }
    }
  }
  navigateApprove(event, id) {}
  navigateDelete(event, id) {}
  render() {
    return (
      <div className="container">
        <center>
          <h5>View Research</h5>
        </center>
        {this.state.researches.length > 0 &&
          this.state.researches.map((value, index) => (
            <div key={index} className="card mb-3">
              <div className="p-3">
                <h5>FullName :{value.fullName}</h5>
                <h5>PhoneNo :{value.phoneNo}</h5>
                <h5>Email :{value.email}</h5>
                <button
                  className="btn btn-success"
                  onClick={(event) =>
                    this.navigateDownload(event, value.uploads)
                  }
                >
                  Research paper
                </button>
                <button
                  className="btn btn-warning"
                  onClick={(event) => this.navigateApprove(event, value._id)}
                >
                  Approve Research
                </button>
                <button
                  className="btn btn-danger"
                  onClick={(event) => this.navigateDelete(event, value._id)}
                >
                  Decline Research
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default viewResearches;
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
        axios.get('/reviewer/getResearchPapers')
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
        axios.get(`/reviewer/getResearch/${id}`).then(res => {

            console.log(res.data);
            console.log(res.data.data.uploads)

            const formdata = new FormData();
            formdata.append("researchersfullName", res.data.data.fullName);
            formdata.append("researchersemail", res.data.data.email);
            formdata.append("researchersphoneNo", res.data.data.phoneNo);
            formdata.append("content", res.data.data.uploads);
            console.log(formdata)

            axios.post(`/reviewer/approvedResearchers`, formdata).then(res => {
                console.log(res.data.data.content);
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
        axios.delete(`/reviewer/deleteResearch/${id}`).then(res => {
            alert("Approve Research?")
            console.log(res.data)
            window.location.reload();
        }).catch(err => {
            console.log(err);
        })
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
            return <center><h1>There is no research paper available!</h1></center>;
        }

        return (
            <div className="research-container">
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
