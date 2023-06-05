import React from "react";
import VideoBackground from "../components/VideoBackground";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="parent" >
         <div
        className="loginForm"
        style={{
          zIndex: "3",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "50%",
          width: "700px",
       
          borderRadius: "5px",
        }}
      >
        <LoginForm />
      </div>
      <VideoBackground />
     
    </div>
  );
}

export default Login;
