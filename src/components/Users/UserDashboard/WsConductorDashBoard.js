import React, { useEffect, useState } from 'react';
import axios from '../../../services/axios';
import { pdfDownload } from '../../Reviewer/pdfDownload';

const WsConductorDashBoard = () => {

    const [workshops, setWorkshopDetails] = useState([]);

    useEffect(() => {
        getWorkshopDetails()
    }, [])

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
            <h2>Workshop Conductor Dashboard</h2>
            <div>
                {
                    researches.length === 0 ?
                        <p>
                            <p>Loading Researcher Details !!!</p>
                        </p> :
                        workshops.map((value, index) => (
                            <div key={index} className="card mb-2" style={{ width: "50%" }}>
                                <div className="p-3">
                                    <p>Researcher Name  :{value.fullName}</p>
                                    <p>Researcher Email :{value.email}</p>
                                    <p>Researcher Mobile:{value.phoneNo}</p>
                                    <p>Workshop Title  :{value.workshopTitle}</p>
                                    <p>Workshop Date  :{value.workshopData}</p>
                                    <p>Workshop Time  :{value.workshopTime}</p>
                                    <p><b>Approve State: {value.approve}</b></p>
                                    <button className="downbtn downbtn_Effect" onClick={e => { navigateDownload(e, value.uploads) }}> View </button>
                                </div>
                            </div>

                        ))
                }
            </div>
        </div>
    )
}

export default WsConductorDashBoard;