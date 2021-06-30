import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../../services/axios';

const AttendeeLogin = () => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = (e) => {
        e.preventDefault();

        const logingUser = {
            email,
            password
        }

        axios.post("/attendee/login", logingUser)
            .then(res => {
                console.log(res.data.message)
                console.log(res.data.email)
                console.log(res.status)
                if (res.status == 200) {
                    alert(res.data.message)
                    history.push('/attendee/dashboard')
                } else {
                    alert(res.data.message)
                    history.push('/')
                }
            }).catch(error => {
                alert(error.response.data.message);
            })
    }

    return (
        <div className="container">
            <br />
            <div className="card" style={{ width: "50%", marginLeft: "25%" }}>
                <div className="card-header">
                    <h4>Attendee Login</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={onLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default AttendeeLogin;