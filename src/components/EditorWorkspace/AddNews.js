import axios from '../../services/axios';
import React,{useState} from "react";
import {useHistory} from 'react-router-dom';
const AddNews = () =>{
   // const history = useHistory()
    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")
    const[image,setImage] = useState("")
    const[imgURL,setImgURL] = useState("")
    

    const newsDetails =()=>{
        const data = new FormData()

        data.append("file",image);
        data.append("upload_preset","af-editor");
        data.append("cloud_name","af-editorcloud");
        
        // fetch("https://api.cloudinary.com/v1_1/af-editorcloud/image/upload",{
        //     method:'POST',
        //     body:data
        // })
        axios.post("https://api.cloudinary.com/v1_1/af-editorcloud/image/upload",data)
        .then(data=>{
            console.log(data.url);
            setImgURL(data.url)
        }).catch(err=>{
            console.log(err)
        })
    
    
    }

    //         
    // fetch("/editor/addNews",{
    //     method:'POST',
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify({
    //         title,
    //         description,
    //         imgURL
    //     })
    // }).then(res=>res.json())
    // .then(data=>{
    //     if(data.error){
    //         console.log(error)
    //     }
    //     else{
    //         history.push('/')
    //     }

    // }).catch(err=>{
    //     console.log(err);
    // })


    const onSubmit = e =>{
        console.log("called");
        e.preventDefault();
        // const formData = new FormData();

        // formData.append("title", title);
        // formData.append("description", description);
        // formData.append("imgURL", imgURL);
        
        console.log(title,description,imgURL)

    axios
      .post("/editor/addNews",  {
          title:title,
          description:description,
          imgURL:imgURL
      })
      .then((res) => {
        resdata = res.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
    }
       

    return(
        <div className="card-header">
        <h4>Add Conference News</h4>
        <div className="container">
        <div className="position-absolute top-50 start-50" style={{  marginLeft: "20%", marginTop:"10%" }}>
        <div className="shadow p-3 mb-5 bg-body rounded" >
        <div className="mb-3">
           <form onSubmit={onSubmit}>
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
            onChange={e=>setImage(e.target.files[0])}
            /> <button className="btn btn-outline-secondary" type="submit" id="inputGroupFileAddon04"
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

