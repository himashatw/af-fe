import React, { Component } from 'react';
import axios from '../../services/axios'
import {pdfDownload} from './pdfDownload'

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

    componentDidMount(){
        axios.get('/reviewer/getworkshopPapers').then(res=>{
            console.log(res.data.data);
            this.setState({workshops : res.data.data})
            console.log("workshops=",this.state.workshops)
        })
    }

    navigateDownload(event, uploads){
        pdfDownload(event,uploads);
    }
    navigateApprove(event, uploads){

    }
    navigateDelete(event, uploads){

    }

    render() {
        if (this.state.workshops.length==0) {
            return <center><h1>There is no Workshop available!</h1></center>;
          }
        return (
            <div className="container">
                <center><h5>View workshops</h5></center>
                {this.state.workshops.length > 0 && this.state.workshops.map((value, index) => (
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

export default viewWorkshops;