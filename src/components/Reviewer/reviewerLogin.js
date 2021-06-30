import React, { Component } from 'react';
import axios from '../../services/axios'
import './Workshop.css'

class reviewerLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
        let reviewerlog = {
            email :this.state.email,
            password :this.state.password
        }
        console.log(reviewerlog);
        axios.post('/reviewerValidate/login',reviewerlog)
        .then(res =>{
            console.log(res.data);
            alert('Login successfully');
            const email = this.state.email
            window.location = `/reviewer/dashboard/1234`;
        }).catch(error =>{
            console.log('error',error.message);
            alert('Email or Password incorrect')
        })
    }

    render() {
        return (
            <div className="research-login-content">
            <div className="container">
               
                <br />
                <div className="card" style={{ width: "50%", marginLeft: "25%" }}>
                    <div className="card-header">
                        <h4>Reviewer Login</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
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
                                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                                />
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button className="btn btn-danger" style={{ marginLeft: "2%" }}>Cancel</button>
                            <a className="btn btn-secondary" href="/reviewer/register" style={{ marginLeft: "2%" }}>Still not registered?.Register Now</a>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default reviewerLogin;