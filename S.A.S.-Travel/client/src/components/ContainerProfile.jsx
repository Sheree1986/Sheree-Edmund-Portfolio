import "./containerProfile.css";
import React from 'react';
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import BtnProfile from "./BtnProfile";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

//fetch id from context api

function ContainerProfile() {
  let navigate = useNavigate();
  const [listOfPosts, setListOfPosts] = useState([]);
  const [delResponse,setdelResponse] = useState([]);
  const [location, setLocation] = useState(null);
  const [image, setImage] = useState(null);
  const [changedImage, setChangedImage] = useState(false)
  const [content, setcontent] = useState(null);
  const [open, setOpen] = useState(false);
  const [idd, setIdd] = useState(null);
  const [value, setValue] = useState(0); // integer state
    const [userId, setUserId] = useState(null);


  useEffect(() => {
      let userToken = JSON.parse(localStorage.getItem("token"));
    if (userToken !== null) {
      var user = userToken.split(" ")[1];
      user = JSON.parse(atob(user.split(".")[1]));
      console.log("Home: ", user._id);
      setUserId(user._id);
    }
    console.log("use effect called");
    if(listOfPosts?.length === 0 ){
      axios
      .get(`http://localhost:5000/api/posts/singleuserpost/${user._id}`)
      .then((response) => {
        // convert image buffer to base64 and then store in listOfPosts state
        response?.data?.map((post) => {
          post.image = `data:image/jpeg;base64,${arrayBufferToBase64(post.image?.img?.data?.data)}`
        });
        setListOfPosts(response?.data)
      });
    }
  }, []);

    useEffect(() => {
  
  }, []);

  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  const viewDetails = (id) => {
    navigate({
      pathname: "/post",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  };

  const deletePost = ( id) => {
   
    axios.delete(`http://localhost:5000/api/posts/${id}`).then((response) => {
      setdelResponse(response.data);
    });
    window.location.reload();
  };

  const editPost = ( location, description, id, image) => {
    setLocation(location)
    setcontent(description)
    setImage(image) // id of image
    setOpen(true)
    setIdd(id) //if of post
  };

  const handleLocationTextBoxInput =  useCallback(e =>{
    e.preventDefault();
    setLocation(e.target.value)
  }, [])

  const handleContentTextBoxInput =  useCallback(e =>{
    e.preventDefault();
    setcontent(e.target.value)
  }, [])

  const editImage = (e) => {

    setImage(e.target.files[0]);
    setChangedImage(true)

  }

  const updatePost = async () => {
  setOpen(false)
    //upload image to server
    let responseOne = null;
    if (changedImage) {
      const data = new FormData()
      data.append('file', image)
      console.log(changedImage)
      responseOne = await axios.post("http://localhost:5000/api/images/upload", data).then(response => {
        console.log(response.data)
        return response.data
      })
    }

    if (!changedImage) {
      console.log('here')
      axios.put(`http://localhost:5000/api/posts/${idd}`, {
        location,
        description: content,
        image: image,
        authorID: "63af0594151ed1332c88f2ad",
      })
      .then((response) => {
        console.log("success:", response.data);
      })
    }

    if (responseOne?.success) {
      console.log('here')
      axios.put(`http://localhost:5000/api/posts/${idd}`, {
        location,
        description: content,
        image: responseOne.Image._id,
        authorID: "63af0594151ed1332c88f2ad",
      })
      .then((response) => {
        console.log("success:", response.data);
      })
    }
    window.location.reload(true);
  };

  return (
    <div>
     <div className="btn">
        <BtnProfile />

      </div>
        
         <div className="mainContainer">
        {/* get all posts */}
        {listOfPosts.map((value, key) => {

          return (
            <div className="card1" key={key}>
              <img onClick={() => viewDetails(value._id)}
                src={value.image}
                style={{cursor:'pointer', width: "100%", height: "15em" }}
              />
              <div className="container1">
                <h4 style={{ color: 'white' }}><b>{value.location}</b></h4>

              </div>
              <div className="image">
                <span
                  className="material-symbols-outlined" style={{ color: 'red', marginRight: '20px', width: '20px' ,cursor:'pointer'}}
                  onClick={() => deletePost(value._id)}
                >
                  delete
                </span>
                <span className="material-symbols-outlined"
                  style={{ color: 'green' ,cursor:'pointer'}}
                  onClick={() => editPost(value.location, value.description, value._id, value.image._id)}>
                  edit
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {open && <div className="formContainer">
          <Box
            className="form"
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '60ch' },
            }}
            noValidate
            autoComplete="off"
          >
              <TextField onChange={handleLocationTextBoxInput}  id="outlined-basic" label="Location"
                value={location} variant="outlined" margin="normal" />
            
              <TextField
                type="file"
                name="file"
                onChange={editImage}
              />

            <TextField onChange={handleContentTextBoxInput} multiline={true}  id="outlined-basic"
              value={content} minRows={6} maxRows={6} label="Tell Your Story" variant="outlined" margin="normal" />
            <Button style={{width:'100px'}} variant="contained" color="primary" onClick={updatePost}>Update</Button>
          </Box> 
            </div>}
    </div>
  );
}

export default ContainerProfile;