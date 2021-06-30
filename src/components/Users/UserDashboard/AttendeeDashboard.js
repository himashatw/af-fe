import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../services/axios';
import { pdfDownload } from '../../Reviewer/pdfDownload';
import './DashBoard.css';

const AttendeeDashboard = () => {

    const email = useParams()
    const [researches, setResearchPapers] = useState([]);
    const [workshops, setWorkshopDetails] = useState([]);

    console.log(email);

    useEffect(() => {
        getResearchPapers(),
            getWorkshopDetails()
    }, [])

    const getResearchPapers = () => {
        axios.get('/reviewer/approvEDResearches')
            .then(res => {
                console.log(res.data.data)
                setResearchPapers(res.data.data)
            })
    }

    const getWorkshopDetails = () => {
        axios.get('/reviewer/getworkshopPapers')
            .then(res => {
                console.log(res.data.data)
                setWorkshopDetails(res.data.data)
            })
    }

    const navigateDownload = (e, uploads) => {
        pdfDownload(e, uploads)
    }

    return (
        <div className="container">
            <h1>Attendee Dashboard</h1>
            {/* <h3>{JSON.stringify(email)}</h3>  */}
            <div className="row">
                <div className="column">
                    <h3>Researches Papers</h3>
                    <h5>Make Sure to Protect Author Rights !!!. Not Share thease Reseaches with Unathorized Users.</h5>
                    <div>
                        {
                            researches.length === 0 ?
                                <p>
                                    <p>Loading Researcher Details !!!</p>
                                </p> :
                                researches.map((value, index) => (
                                    <div key={index} className="card mb-3">
                                        <div className="p-3">
                                            <p>Author Name  :{value.fullName}</p>
                                            <p>Author Email :{value.email}</p>
                                            <button className="downbtn downbtn_Effect" onClick={e => { navigateDownload(e, value.uploads) }}>View and Download Research</button>
                                        </div>
                                    </div>

                                ))
                        }
                    </div>
                </div>
                <div className="column">
                    <h3>Workshop Details</h3>
                    <h5>Make Sure to Protect Author Rights !!!. Not Share thease Reseaches with Unathorized Users.</h5>
                    <div>
                        {
                            workshops.length === 0 ?
                                <p>
                                    <p>Loading Researcher Details !!!</p>
                                </p> :
                                workshops.map((value, index) => (
                                    <div key={index} className="card mb-3">
                                        <div className="p-3">
                                            <p>Author Name  :{value.fullName}</p>
                                            <p>Author Email :{value.email}</p>
                                            <p>Workshop Title  :{value.workshopTitle}</p>
                                            <p>Workshop Date  :{value.workshopData}</p>
                                            <p>Workshop Time  :{value.workshopTime}</p>
                                            <button className="downbtn downbtn_Effect" onClick={e => { navigateDownload(e, value.uploads) }}>View and Download Workshop Details</button>
                                        </div>
                                    </div>

                                ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AttendeeDashboard;