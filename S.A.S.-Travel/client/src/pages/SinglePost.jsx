import React from "react";
import Navbar from "../components/Navbar";
import BtnPost from "../components/BtnPost";
//helps with viewing single post based on id
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
//post/?838392823939
function SinglePost() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState(null);
  const [binaryString, setBinaryString] = useState(null);
  const [searchParams] = useSearchParams();

  //single post
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/post/${searchParams.get("id")}`)
      .then((response) => {
        console.log(response.data);
        setPostObject(response.data);
        let array = response.data?.image?.img?.data?.data
        setBinaryString(`data:image/jpeg;base64,${arrayBufferToBase64(array)}`)

      });
  }, []);
  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  return (
    <>
      <Navbar />

      <h1 style={{ marginTop: '3em' }}>My post</h1>
    
      <div
        className="wrapper"
        style={{
          border: "1px solid white",
          width: "60%",
          height: "40em",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          alignItems: "center",
          marginTop: "5em",
        }}
      >
        <div
          className="card"
          style={{

            height: "2em",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",

            margin: "0 auto",

          }}
        >
          <div className="container-img" style={{ marginTop: '2em' }}>
            <div>
              <img
                src={binaryString}
                style={{ width: "25em" }}
              />
            </div>
          </div>
          <h3 style={{ color: "black" }}>
            {postObject && postObject.location}
          </h3>
          <p style={{ color: "black", fontSize: '16px' }}>
            {postObject && postObject.description}
          </p>

        </div>

      </div>

    </>
  );
}

export default SinglePost;

//view post image in recommendation page on the cube -- user



//view detailed view of post -- user
//view image of posts on community page --user (done)
//view all users -- admin (done)
//delete users --admin ( done)
//view posts -- admin (done)
//view post Count -- admin (done)

//create post for user (done)
//delete the post --user (done)
//update the post --user (partially done)
//get all posts in community page (done)
