import React from "react";
import axios from "axios";
import "./ContainerCommunity.css";
import { useNavigate, createSearchParams } from "react-router-dom";

export default function FullWidthGrid() {
   let navigate = useNavigate();
  const [posts, setPosts] = React.useState(null);
  React.useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/userposts`).then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }, []);
    const viewDetails = (id) => {
    navigate({
      pathname: "/post",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  };

  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
  return (
    <div className="mainContainer">
      {posts &&
        posts.map((post) => {
          let array = post.image?.img?.data?.data
          let binaryString = `data:image/jpeg;base64,${arrayBufferToBase64(array)}`

          return (
            <div  style={{cursor:'pointer'}}onClick={() => viewDetails(post._id)} className="card1" key={post._id}>
              <img src={binaryString} alt="Avatar" style={{ width: "100%", height: '300px' }} />
              <div className="container1">
                <h4 style={{ color: 'white' }}><b>{post.location}</b></h4>
               
              </div>
            </div>

          );
        })}
    </div>
  );
}