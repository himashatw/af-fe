import axios from "axios";
import React,{useState} from "react";

const AddNews = () =>{
    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")
    const[image,setImage] = useState("")
    const[url,setUrl] = useState("")
    

    const newsDetails =()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","af-editor")
        data.append("cloud_name","af-editorcloud")
        fetch("https://api.cloudinary.com/v1_1/af-editorcloud/image/upload",{
            method:'POST',
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        }).catch(err=>{
            console.log(err)
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("url", url);
        
        setTitle("");
        setDescription("");
        setUrl("");

        axios
        .post("/addNews",formData,{
            headers:{
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res)=>{
            resdata = res.data.message;
            alert(resdata);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
       

    return(
        <div className="card-header">
        <h4>Add Conference News</h4>
        <div className="container">
        <div className="position-absolute top-50 start-50" style={{  marginLeft: "20%", marginTop:"10%" }}>
        <div className="shadow p-3 mb-5 bg-body rounded" >
        <div className="mb-3">
            <form onSubmit={onSubmit} >
            <label htmlFor="speakerName" className="form-label">Topic</label>
            <input
                 type="text"
                 className="form-control"
                 id="speakerName"
                 name="speakerName"
                 placeholder="Enter the topic" 
                 value = {title}
                 onChange={(e)=>setTitle(e.target.value)}
                 /> <br />

            <label htmlFor="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            ></textarea> <br />
        
            <label htmlFor="flyer" className="form-label">Uplaod Flyer</label>
            <input type="file" 
            className="form-control" 
            id="inputGroupFile04" 
            aria-describedby="inputGroupFileAddon04" 
            aria-label="Upload" 
            onChange={(e)=>setImage(e.target.files[0])}
            />


            <button className="btn btn-outline-secondary" type="submit" id="inputGroupFileAddon04"
            onClick={(newsDetails())}
            >Upload</button>

            
        
        </form>
        </div> 
        </div>
        </div>
        </div>
        </div>
        
);    
};


export default AddNews;

