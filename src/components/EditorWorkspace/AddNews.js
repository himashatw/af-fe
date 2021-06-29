import React from "react";

const AddNews = () =>{
    return(
        <div className="card-header">
        <h4>Add Conference News</h4>
        <div className="container" className="position-absolute top-50 start-50 translate-middle" >
        <div  className="shadow p-3 mb-5 bg-body rounded" >
        <div className="mb-3">
            <form>
            <label htmlFor="speakerName" className="form-label">Topic</label>
            <input
                 type="text"
                 className="form-control"
                 id="speakerName"
                 name="speakerName"
                 placeholder="Enter the topic" /> <br />

            <label htmlFor="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> <br />
        
            <label htmlFor="flyer" className="form-label">Uplaod Flyer</label>
            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
        
            <button class="btn btn-outline-secondary" type="submit" id="inputGroupFileAddon04">Upload</button>

            </form>
        

        </div> 
        </div>
        </div>
        </div>
        
);    
};


export default AddNews;

