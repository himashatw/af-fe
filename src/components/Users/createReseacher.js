// import React, { useState } from 'react';
// import axios from '../../services/axios';
// import { useHistory } from 'react-router-dom';

// const createReseacher = (props) => {
//     //const history = useHistory();
//     const initialState = {
//         fulllname: '',
//         email: '',
//         password: '',
//         phoneNo: ''
//     }
//     const [formData,setFormData]=useState('');
//     const [researcher, setResearcher] = useState(initialState);
//     const [progressPercent,setProgressPercent] = useState(0);
//     const [error,setError]=useState({
//         found:false,
//         message:''
//     })

//     const upload = ({target:{files}})=>{
//         const data = new FormData();
//         data.append('uploads',files[0])
//         setFormData(data);
//     }

//     const onSubmit = e =>{
//         e.preventDefault();
//         const researchers = {
//             fullName:researcher.fulllName,
//             email: researcher.email,
//             password: researcher.password,
//             phoneNo: researcher.phoneNo
//         }
//         setProgressPercent(0)
//         const options = {
//             onUploadProgress:(progressEvent)=>{
//                 const {loaded,data} = progressEvent
//                 let percent = Math.floor(loaded*100/total)
//                 console.log(`${loaded}kb of ${total}kb | ${percent}%`);
//                 setProgressPercent(percent)
//             }
//         }
        
//         axios.post("/reseacher/add",formData,options)
//         .then(res =>{
//             setTimeout(() =>{
//                 setResearcher(res.data.researcher)
//                 setProgressPercent(0)
//             },1000)
//         }).catch(err =>{
//             console.log(err.response)
//             setError({
//                 found:true,
//                 message:err.response.data.errors,
//             })

//             setTimeout(() =>{
//                 setError({
//                     found:false,
//                     message:''
//                 })
//             },3000)
//         })
//     } 
 
//     const onChange = e => {
//         const { name, value } = e.target;
//         setResearcher({ ...researcher, [name]: value });
//     }

//     return (
//         <div className="container">
//             <form onSubmit={onSubmit} encType="multipart/form-data">
//                 <div className="form-group">
//                     <label htmlFor="title">Title</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="title"
//                         required
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         name="title"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="author">Author</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="author"
//                         required
//                         value={author}
//                         onChange={(e) => setAuthor(e.target.value)}
//                         name="author"
//                         style={{ "width": "25%" }}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="des">Description</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="description"
//                         required
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         name="description"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="published_date">Published Date</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="published_date"
//                         required
//                         value={published_date}
//                         onChange={(e) => setPublishedDate(e.target.value)}
//                         name="published_date"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="upload">Upload your file</label><br />
//                     <input
//                         type="file"
//                         uploads="uploads"
//                         className="form-control-file"
//                         onChange={onChangeFile}
//                     />
//                 </div>
//                 <br />

//                 <button type="submit" className="btn btn-success">
//                     Submit
//                 </button>

//             </form>
//         </div>
//     )

// }

// export default createReseacher;