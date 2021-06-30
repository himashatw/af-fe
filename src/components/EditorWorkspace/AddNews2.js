import React, { useState } from "react";
import axios from "../../services/axios";

const AddNews2 = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgURL, setImgURL] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [urlAvailable, setUrlAvailable] = useState(false);
  const [uploadingTxt, setUploadingTxt] = useState(false);
  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };
  const fileUploadHandler = () => {
    setUploadingTxt(true);
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("upload_preset", "af-editor");
    data.append("cloud_name", "af-editorcloud");
    fetch("https://api.cloudinary.com/v1_1/af-editorcloud/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.url);
        setImgURL(data.url);
        setUrlAvailable(true);
        setUploadingTxt(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fileSubmitHandler = async () => {
    await axios
      .post("/editor/addNews", {
        title : title,
        description:description,
        imgURL: imgURL
      })
      .then((response) => {
        console.log(response);
        setSelectedFile(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card-header">
    <h4>Add Conference News</h4>
    <div className="container">
    <div className="position-absolute top-50 start-50" style={{  marginLeft: "20%", marginTop:"10%" }}>
    <div className="shadow p-3 mb-5 bg-body rounded" >
    <div className="mb-3">
       
        <label htmlFor="newsTitle" className="form-label">Topic</label>
        <input
             type="text"
             id="title"
             className="form-control"
             name="speakerName"
             placeholder="Enter the topic" 
             value = {title}
             onChange={e =>setTitle(e.target.value)}
             /> <br />

        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea className="form-control"  
        rows="3"
        id="description"
        value={description}
        onChange={e=>setDescription(e.target.value)}
        ></textarea> <br />
    
        <label htmlFor="flyer" className="form-label">Uplaod Flyer</label>
        <input type="file" 
        className="form-control" 
        aria-describedby="inputGroupFileAddon04" 
        aria-label="Upload" 
        onChange={fileSelectedHandler}
        />  {uploadingTxt && <h3>uploading...</h3>}
          {urlAvailable ? (
          <button className="btn btn-primary mt-5" onClick={fileSubmitHandler}>
              Submit
            </button>
          ) : (
            <button className="btn btn-success mt-5" onClick={fileUploadHandler}>
             Upload Image
           </button>
        )}
    </div> 
    </div>
    </div>
    </div>
    </div>



    // <div style={{ padding: "2px" }}>
    //   <input type="file" onChange={fileSelectedHandler} />
    //   <br />
    //   {uploadingTxt && <h3>uploading...</h3>}
    //   {urlAvailable ? (
    //     <button className="btn btn-primary mt-5" onClick={fileSubmitHandler}>
    //       Submit
    //     </button>
    //   ) : (
    //     <button className="btn btn-success mt-5" onClick={fileUploadHandler}>
    //       Upload Image
    //     </button>
    //   )}
    // </div>
  );
};

export default AddNews2;
