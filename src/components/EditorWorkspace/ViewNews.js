import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../services/axios";

const ViewNews = () =>{

const [news,setNews] = useState([])
useEffect(()=>{
  axios.get("/editor/viewNews").then((res) => {
    console.log(res.data.news);
    setNews(res.data.news)
  })
},[])

    return(

<div className="card-header">
  
<h4>View Conference News</h4>
<div className="container">
<div className="position-absolute top-50 start-50" style={{  marginLeft: "5%", marginTop:"5%" }}>
<div  className="shadow p-3 mb-5 bg-body rounded" >
<table class="table caption-top">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Flyer Image</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
    news.map(item=>{
      return(
        <tr>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td><img src = {item.imgURL} width="500" height="600" /></td>
        <td>
        <Link to={`/editor/editNews/${item._id}`} className="btn btn-outline-success">
                Edit 
        </Link>
        <Link to="/editor/deleteNews" className="btn btn-outline-danger">
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


export default ViewNews;