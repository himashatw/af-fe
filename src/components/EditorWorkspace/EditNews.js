import React, { useEffect, useState } from "react";
import axios from '../../services/axios';

const EditNews = (props) => {
    const { id } = props.match.params
    console.log(id)

    useEffect(async () => {
        console.log("useeffect");
        await axios.get(`/editor/viewNewsOne/${id}`)
            .then(response => {
                setTitle(response.data.news.title)
                setDescription(response.data.news.description)
                setImgURL(response.data.news.imgURL)
            })
    }, [])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imgURL, setImgURL] = useState("")



    const updateNews = () => {
        axios.put(`/editor/updateNews/${id}`, {
            title: title,
            description: description,
            imgURL: imgURL
        }).then((response) => {
            console.log(response);
            setSelectedFile(null);
        })
            .catch((error) => {
                console.log(error);
            });
    }

    return (

        <div className="card-header">
            <h4>Edit Conference News</h4>
            <div className="container">
                <div className="position-absolute top-50 start-50" style={{ marginLeft: "20%", marginTop: "10%" }}>
                    <div className="shadow p-3 mb-5 bg-body rounded" >
                        <div className="mb-3">

                            <label htmlFor="newsTitle" className="form-label">Topic</label>
                            <input
                                type="text"
                                id="title"
                                className="form-control"
                                name="speakerName"
                                placeholder="Enter the topic"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            /> <br />

                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control"
                                rows="3"
                                id="description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            ></textarea> <br />

                            <label htmlFor="flyer" className="form-label">Uplaoded Flyer</label>
                            <img src={imgURL} width="400" height="500" />

                            <button className="btn btn-primary mt-5" onClick={updateNews} >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}
export default EditNews;