import "./cta.css";
// import { Routes } from "./routes/Routes";
// import { Route } from "react-router-dom";

// import  Login  from "../pages/Login";
import { useNavigate } from "react-router-dom";
// import {Link} from "react-router-dom"

function CTA() {
  
  let navigate = useNavigate();
  return (
    <>
      <div className="group-btn">
        <div className="login-btn-wrapper">
          {/* <Link to={`/${<Login/>}`}> */}
          <button
            className="login"
            id="show-login"
            onClick={() => {
              navigate("/login");
            }}

            //   {const showLogin = document.querySelector(".parent");
            // showLogin.style.display = 'block'};
          >
            <span className="btn--anim"></span>
            <span className="btn--anim"></span>
            <span className="btn--anim"></span>
            <span className="btn--anim"></span>
            LOG IN
          </button>
          {/* </Link> */}
        </div>
        <div className="register-btn-wrapper">
          <button
            className="register"
            id="show-register"
            onClick={() => {
              navigate("/register");
            }}
          >
            <span className="btn--anim1"></span>
            <span className="btn--anim1"></span>
            <span className="btn--anim1"></span>
            <span className="btn--anim1"></span>
            REGISTER
          </button>
        </div>
      </div>
    </>
  );
}
export default CTA;
