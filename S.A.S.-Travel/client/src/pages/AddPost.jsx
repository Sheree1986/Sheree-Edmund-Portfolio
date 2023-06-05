import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState,useEffect } from "react";

function AddPost() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
   const[imageId,setImageId] = React.useState(null)
    const[imageData,setImageData] = useState(null)
     const [userId, setUserId] = useState(null);


    
    useEffect(() => {
    let userToken = JSON.parse(localStorage.getItem("token"));
    if (userToken !== null) {
      var user = userToken.split(" ")[1];
      user = JSON.parse(atob(user.split(".")[1]));
      console.log("Home: ", user._id);
      setUserId(user._id);
    }
  }, []);

  //make sure to fetch the id from context api and add it dynamically to the post request here, I am hardcoding it for now
  const createPost = async (e) => {
     e.preventDefault();
     const data = new FormData()
      data.append('file',imageData)
      //upload image to server
   let responseOne =  await  axios.post("http://localhost:5000/api/images/upload", data).then (response => {
      
    console.log('jjj')
    return response.data
   }
 
     )


  if (responseOne.success){
     axios.post("http://localhost:5000/api/posts/", {
        location,
        description: content,
        image:responseOne.Image._id,
        authorID: userId,
      })
      .then((response) => {
       
        console.log("success:", response.data);
      })
  }
   
   
  };

  const fileChange = (e) =>{
      setImageData(e.target.files[0])
     
      
      }
   
  return (
    <>
      <Navbar />
      <h1 style={{fontFamily: "'Poppins', sans-serif", fontWeight: "400", color: "#333"}}>Add Post</h1>
      <div
        className="post-container"
        style={{
          
          width: "50em",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          // marginTop: "5em",
          height: "30em",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/*  set the encoding type to send the multipart data or files through form data. */}
        <form style={{marginLeft: "12em"}}>
          <input
            type="text"
            name="location"
            id=""
            value={location}
            style={{ width: "30em", marginBottom: "2em" }}
            placeholder="Location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <textarea
            name="content"
            id=""
            cols="30"
            rows="10"
            value={content}
            placeholder="your description"
            style={{ width: "30em", marginBottom: "2em" }}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
          <br />
          <input
            type="file"
            name="file"
           
            onChange={fileChange}
          />
          <br />
          <button
            onClick={createPost}
            type="submit"
            style={{ marginTop: "4em" }}
          >
            Add post
          </button>
        </form>
      </div>
    </>
  );
}

export default AddPost;
