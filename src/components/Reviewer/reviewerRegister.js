import React, { Component } from 'react';
import axios from '../../services/axios'
import './Workshop.css'

class reviewerRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            phoneNo: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(event) {
        this.setState({ [event.target.name] : event.target.value })
    }
    onSubmit(event){
        event.preventDefault();
        let reviewer = {
            fullName :this.state.fullName,
            email :this.state.email,
            phoneNo :this.state.phoneNo,
            password :this.state.password
        }
        console.log(reviewer);
        axios.post('/reviewerValidate/register',reviewer)
        .then(res =>{
            console.log(res.data)
            alert('Registered successfully')
            window.location = `/reviewer/login`
        }).catch(error =>{
            console.log('error',error.message);
        })
    }

    render() {
        return (
            <div className="research-login-content">
            <div className="container">
                <br/>
                <div className="card" style={{ width: "50%", marginLeft: "25%" }}>
                    <div className="card-header">
                        <h4>Reviewer Registration</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    value={this.state.fullName}
                                    onChange={this.onChange}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    required
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    placeholder="abc@gmail.com"
                                />
                            </div>                          
                            <div className="mb-3">
                                <label htmlFor="phoneNo" className="form-label">Mobile Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phoneNo"
                                    name="phoneNo"
                                    required
                                    value={this.state.phoneNo}
                                    onChange={this.onChange}
                                    placeholder="071 555 5554"
                                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                    title="Must contain at least 10  numbers"
                                    maxLength="10"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    required
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    placeholder="minimum 8 characters"
                                    pattern="(?=.*\[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                                />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button className="btn btn-danger" style={{ marginLeft: "2%" }}>Cancel</button>
                            <a className="btn btn-secondary" href="/reviewer/login" style={{ marginLeft: "2%" }}>Login Now</a>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default reviewerRegister;