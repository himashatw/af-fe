import React, { useState } from 'react';
import axios from '../../services/axios';
import { useHistory,Link } from 'react-router-dom';

const createAttendee = (props) => {
    //const history = useHistory();
    const initialState = {
        fullName: "",
        email: "",
        password: "",
        phoneNo: "",
        payment: 0
    }
    const [attendee, setAttendee] = useState(initialState);

    const onSubmit = (e) => {
        e.preventDefault();
        const attendees = {
            fullName: attendee.fullName,
            email: attendee.email,
            password: attendee.password,
            phoneNo: attendee.phoneNo,
            payment: attendee.payment
        }
        axios.post("/attendee/add", attendees)
            .then(res => {
                console.log(res.data);
                alert('Registered Successfully');
                history.push('/user/attendee/login');
            }).catch(error => {
                console.log(error.response.data.error);
            })
    }

    const onChange = e => {
        const { name, value } = e.target;
        setAttendee({ ...attendee, [name]: value });
    }

    return (
        <div className="container">
            <br />
            <div className="card" style={{ width: "50%", marginLeft: "25%" }}>
                <div className="card-header">
                    <h4>Attendee Registration</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                name="fullName"
                                required
                                value={attendee.fullName}
                                onChange={onChange}
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
                                value={attendee.email}
                                onChange={onChange}
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
                                value={attendee.password}
                                onChange={onChange}
                                placeholder="minimum 4 characters"
                                minLength="4"
                                pattern="[0-9a-fA-F]{4,8}"
                                placeholder="minimum 8 characters"
                                pattern="(?=.*\[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
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
                                value={attendee.phoneNo}
                                onChange={onChange}
                                placeholder="071 555 5554"
                                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                title="Must contain at least 10  numbers"
                                maxLength="10"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="payment" className="form-label">Payment</label>
                            <input
                                type="text"
                                className="form-control"
                                id="payment"
                                name="payment"
                                required
                                value={attendee.payment}
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to = "/sign-up">
                        <button className="btn btn-danger" style={{ marginLeft: "2%" }}>Cancel</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default createAttendee;
