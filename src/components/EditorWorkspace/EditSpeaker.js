import React, { useEffect, useState } from "react";
import axios from '../../services/axios';

const EditSpeaker = (props) => {
    const { id } = props.match.params
    console.log(id)

    useEffect(async () => {
        console.log("useeffect");
        await axios.get(`/editor/viewSpeakerOne/${id}`)
            .then(response => {
                setName(response.data.speaker.name)
                setDescription(response.data.speaker.description)
                setImgURL(response.data.speaker.imgURL)
            })
    }, [])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [imgURL, setImgURL] = useState("")



    const updateSpeaker = () => {
        axios.put(`/editor/updateSpeaker/${id}`, {
            name: name,
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
            <h4>Edit Keynote Speaker</h4>
            <div className="container">
                <div className="position-absolute top-50 start-50" style={{ marginLeft: "20%", marginTop: "10%" }}>
                    <div className="shadow p-3 mb-5 bg-body rounded" >
                        <div className="mb-3">

                            <label htmlFor="speakerTitle" className="form-label">Name</label>
                            <input
                                type="text"
                                id="title"
                                className="form-control"
                                name="speakerName"
                                placeholder="Enter the topic"
                                value={name}
                                onChange={e => setName(e.target.value)}
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

                            <button className="btn btn-primary mt-5" onClick={updateSpeaker} >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}
export default EditSpeaker;