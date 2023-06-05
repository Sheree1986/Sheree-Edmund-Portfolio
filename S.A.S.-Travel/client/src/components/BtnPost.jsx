import "./btn-post.css";
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
            className="update"
          
            onClick={() => {
              navigate("/add-post");
            }}
          >
            <span className="btn--anim"></span>
            <span className="btn--anim"></span>
            <span className="btn--anim"></span>
            <span className="btn--anim"></span>
            UPDATE
          </button>
          {/* </Link> */}
        </div>
        <div className="register-btn-wrapper">
          <button
            className="delete"
            id="add-btn"
            onClick={() => {
              navigate("/add-post");
            }}
          >
            <span className="btn--anim1"></span>
            <span className="btn--anim1"></span>
            <span className="btn--anim1"></span>
            <span className="btn--anim1"></span>
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}
export default CTA;