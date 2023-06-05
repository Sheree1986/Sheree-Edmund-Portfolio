import React, { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  // const { user } = useContext(AuthContext);
  // const {loading} = useContext(AuthContext);
 // const location = useLocation();
  
    let user = null;
    let userToken = JSON.parse(localStorage.getItem("token"));
    if(userToken !== null){
        user = userToken.split(" ")[1];
        user = JSON.parse(atob(user.split(".")[1]));
        console.log("Home: ",user);
    }
  //console.log("user2 ", localStorage.getItem('user'))

  return(
    (user?._id)
        ? <Outlet /> //display the next matching child route
        : (<h1>Unauthorized</h1>)
  )
}

export default RequireAuth;