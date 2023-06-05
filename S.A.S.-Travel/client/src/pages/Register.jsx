import React from 'react'
import VideoBackground from "../components/VideoBackground";
import RegisterForm from "../components/RegisterForm";

function Register() {
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
            <RegisterForm />
          </div>
          <VideoBackground />
         
        </div>
      );
}

export default Register