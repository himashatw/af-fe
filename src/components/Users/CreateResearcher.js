import React, { useState } from 'react';
import axios from '../../services/axios';
import { useHistory } from 'react-router-dom';

const CreateReseacher = (props) => {
    //const history = useHistory();
    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [uploads, setUploads] = useState("");

    const [progressPercent, setProgressPercent] = useState(0);

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

        axios.post("/reseacher/add", formData)
            .then((res) => {
                resdata = res.data.message;
                alert(resdata);
                //props.history.push('/')
            })
            .catch(err => {
                console.log(err.response)
                setError({
                    found: true,
                    message: err.response.data.errors,
                })
            })
    }
    // const [progressPercent, setProgressPercent] = useState(0);
    // const [error, setError] = useState({
    //     found: false,
    //     message: ''
    // })

    // const upload = ({ target: { files } }) => {
    //     const data = new FormData();
    //     data.append('uploads', files[0])
    //     data.append('fullName', files.fullName)
    //     data.append('email', files.email)
    //     data.append('password', files.password)
    //     data.append('phoneNo', files.phoneNo)
    //     setFormData(data);
    // }

    // const onSubmit = e => {
    //     e.preventDefault();
    //     setResearcher({
    //         uploads: '',
    //         fullName: '',
    //         email: '',
    //         password: '',
    //         phoneNo: ''
    //     })
    //     setProgressPercent(0)
    //     const options = {
    //         onUploadProgress: (progressEvent) => {
    //             const { loaded, data } = progressEvent
    //             let percent = Math.floor(loaded * 100 / total)
    //             console.log(`${loaded}kb of ${total}kb | ${percent}%`);
    //             setProgressPercent(percent)
    //         }
    //     }

    //     axios.post("/reseacher/add", formData)
    //         .then(res => {
    //             setTimeout(() => {
    //                 setResearcher(res.data.researcher)
    //                 setProgressPercent(0)
    //                 alert('Registered Successfuly')
    //                 //props.history.push('/login');
    //             }, 1000)
    //         }).catch(err => {
    //             console.log(err.response)
    //             setError({
    //                 found: true,
    //                 message: err.response.data.errors,
    //             })

    //             setTimeout(() => {
    //                 setError({
    //                     found: false,
    //                     message: ''
    //                 })
    //             }, 3000)
    //         })
    // }

    // const onChange = e => {
    //     const { name, value } = e.target;
    //     setResearcher({ ...researcher, [name]: value });
    // }

    return (
        <div className="container">
            <form onSubmit={onSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        required
                        value={fullName}
                        onChange={(e) => setfullName(e.target.value)}
                        name="fullName"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNo">Mobile Number</label>
                    <input
                        type="phoneNo"
                        className="form-control"
                        id="phoneNo"
                        required
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        name="phoneNo"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="upload">Upload your file</label><br />
                    <input
                        type="file"
                        uploads="uploads"
                        required
                        className="form-control-file"
                        onChange={upload}
                    />
                </div>
                <br />

                <button type="submit" className="btn btn-success">
                    Submit
                </button>

            </form>
        </div>
    )

}

export default CreateReseacher;