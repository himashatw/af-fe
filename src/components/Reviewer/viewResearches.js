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


class viewResearches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            researches: []
        }
        this.navigateDownload = this.navigateDownload.bind(this);

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
        try {
            event.preventDefault();
            const url = uploads.data;
            console.log(url)
            const buff = new Buffer(url, 'base64');
            const base64data = buff.toString('base64');
            const stringLB = base64data.toString('utf8');
            console.log(stringLB)
            convBase64ToFile(base64data)

            function convBase64ToFile(strBase64) {
                var tmp = strBase64.split(",");
                var prefix = tmp[0];
                var contentType = "application/pdf";
                console.log(prefix.type)
                var byteCharacters = atob(stringLB);

                var byteNumbers = new Array(byteCharacters.length);
                for (var i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                var blob = new Blob([byteArray], { type: contentType });
                var blobUrl = URL.createObjectURL(blob);
                window.open(blobUrl, "popup", "width=1000,height=500,scrollbars=1,resizable=no," +
                    "toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0");
            }

        }catch (err) {
            if (err) {
                console.error(err.message)
            }
        }
    }

    navigateApprove(event, id) {

    }
    navigateDelete(event, id) {

    }
    render() {
        return (
            <div className="container">
                <center><h5>View Research</h5></center>
                {this.state.researches.length > 0 && this.state.researches.map((value, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            <h5>FullName :{value.fullName}</h5>
                            <h5>PhoneNo  :{   value.phoneNo}</h5>
                            <h5>Email    :{     value.email}</h5>
                            <button className="btn btn-success" onClick={event => this.navigateDownload(event, value.uploads)}>Research paper</button>
                            <button className="btn btn-warning" onClick={event => this.navigateApprove(event, value._id)}>Approve Research</button>
                            <button className="btn btn-danger" onClick={event => this.navigateDelete(event, value._id)}>Decline Research</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default viewResearches;
