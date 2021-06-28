import React, { useState } from 'react';
import axios from '../../services/axios';
import {ProgressBar} from 'react-bootstrap';
import { useHistory,Link } from 'react-router-dom';

const CreateWsConductor = (props) => {
    //const history = useHistory();
    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [workshopTitle, setworkshopTitle] = useState("");
    const [workshopData, setworkshopData] = useState("");
    const [workshopTime, setworkshopTime] = useState("");
    const [uploads, setUploads] = useState("");

    const [progressPercent, setProgressPercent] = useState();
    const [error, setError] = useState({
        found: false,
        message: ''
    })

    const upload = e => {
        setUploads(e.target.files[0])
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("fullName", fullName);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("phoneNo", phoneNo);
        formData.append("uploads", uploads);

        setfullName("");
        setEmail("");
        setPassword("");
        setPhoneNo("");
        setworkshopTitle("")
        setworkshopData("")
        setworkshopTime("")

        axios.post("/workshopcon/add", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: data => {
                //Set the progress value to show the progress bar
                setProgressPercent(Math.round((100 * data.loaded) / data.total))
            }
            })
            .then((res) => {
                resdata = res.data.message;
                alert(resdata);
                //props.history.push('/')
            })
            .catch(err => {
                console.log(err.response.data.errors)
                setError({
                    found: true,
                    message: err.response.data.errors,
                })
            })
    }

    return (
        <div className="container">
            <br />
            <div className="card" style={{ width: "50%", marginLeft: "25%" }}>
                <div className="card-header">
                    <h4>Workshop Conductor Registration</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit} encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                required
                                value={fullName}
                                onChange={(e) => setfullName(e.target.value)}
                                name="fullName"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                placeholder="abc@gmail.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                placeholder="minimum 8 characters"
                                pattern="(?=.*\[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNo" className="form-label">Mobile Number</label>
                            <input
                                type="phoneNo"
                                className="form-control"
                                id="phoneNo"
                                required
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                name="phoneNo"
                                placeholder="071 555 5554"
                                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                title="Must contain at least 10  numbers"
                                maxLength="10"
                            />
                        </div>
                        <div className="mb-3">
                        {error.found &&<span className="alert-danger" role='alert'>
                                {error.message}
                            </span>}
                            <br/>
                            <label htmlFor="upload" className="form-label">Upload your file</label><br />
                            <input
                                type="file"
                                uploads="uploads"
                                required
                                className="form-control-file"
                                onChange={upload}
                            />
                        </div>
                        {progressPercent && <ProgressBar now={progressPercent} label={`${progressPercent}%`} />}
                        <br />

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <Link to = "/sign-up">
                        <button className="btn btn-danger" style={{ marginLeft: "2%" }}>Cancel</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default CreateWsConductor;