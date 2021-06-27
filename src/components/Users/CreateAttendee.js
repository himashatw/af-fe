import React, { useState } from 'react';
import axios from '../../services/axios';
import { useHistory } from 'react-router-dom';

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
                //props.history.push('/login');
            }).catch(error => {
                alert(error.response.data.error);
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
                                value={attendee.password}
                                onChange={onChange}
                                placeholder="minimum 4 characters"
                                minLength="4"
                                pattern="[0-9a-fA-F]{4,8}"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNo" className="form-label">Mobile Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phoneNo"
                                name="phoneNo"
                                value={attendee.phoneNo}
                                onChange={onChange}
                                placeholder="071 555 5554"
                                pattern="[0-9]{3}[0-9]{3}-[0-9]{4}"
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
                                value={attendee.payment}
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default createAttendee;
