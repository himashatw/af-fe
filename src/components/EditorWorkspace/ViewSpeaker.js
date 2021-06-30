import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../services/axios";

const ViewSpeaker = () => {

  const [speaker, setSpeaker] = useState([])
  useEffect(() => {
    axios.get("/editor/viewSpeaker").then((res) => {
      console.log(res.data.speaker);
      setSpeaker(res.data.speaker)
    })
  }, [])

  return (

    <div className="card-header">

      <h4>View Added Keynote Speakers </h4>
      <div className="container">
        <div className="position-absolute top-50 start-50" style={{ marginLeft: "10%", marginTop: "5%" }}>
          <div className="shadow p-3 mb-5 bg-body rounded" >
            <table class="table caption-top">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Headshot</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  speaker.map(item => {
                    return (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td><img src={item.imgURL} width="200" height="200" /></td>
                        <td>
                          <Link to={`/editor/editSpeaker/${item._id}`} className="btn btn-outline-success">
                            Edit
                          </Link>
                          <Link to="/editor/deleteSpeaker" className="btn btn-outline-danger">
                            Delete
                          </Link>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>

  );
};


export default ViewSpeaker;