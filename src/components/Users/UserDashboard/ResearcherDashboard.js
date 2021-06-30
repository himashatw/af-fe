import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../services/axios';
import { pdfDownload } from '../../Reviewer/pdfDownload';

const ResearcherDashboard = (props) => {

    const id = useParams();
    const [researches, setResearchPapers] = useState([]);

    console.log(id.id);
    const loggedId = id.id;

    useEffect(() => {
        getResearchPapers()
    }, [])

    // const getResearchPapers = () => {
    //     axios.get('/reviewer/approvEDResearches')
    //         .then(res => {
    //             console.log(res.data.data)
    //             setResearchPapers(res.data.data)
    //         })
    // }

    const getResearchPapers = () => {
        axios.get(`/reseacher/approval/${loggedId}`)
            .then(res => {
                approvedId = res.data.data._id;
                console.log(approvedId)
                setResearchPapers(res.data.data)
            })
    }

    const navigateDownload = (e, uploads) => {
        pdfDownload(e, uploads)
    }

    return (
        <div className="container">
            <h2>Researcher Dashboard</h2>
            <div>
                {
                    researches.length === 0 ?
                        <p>
                            Loading Researcher Details !!!
                        </p> :
                            <div className="card mb-2" style={{ width: "50%" }}>
                                <div className="p-3">
                                    <p>Researcher Name  :{fullName}</p>
                                    <p>Researcher Email :{email}</p>
                                    <p>Researcher Mobile:{phoneNo}</p>
                                    {/* <p><b>Approve State :{value.approve}</b></p> */}
                                    <button className="downbtn downbtn_Effect" onClick={e => { navigateDownload(e, uploads) }}> View </button>
                                </div>
                            </div>

                }
            </div>
        </div>
    )
}

export default ResearcherDashboard;