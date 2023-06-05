import Button from '@mui/material/Button';
// import { Routes } from "./routes/Routes";
// import { Route } from "react-router-dom";

// import  Login  from "../pages/Login";
import { useNavigate } from "react-router-dom";
// import {Link} from "react-router-dom"

function BtnProfile() {
  let navigate = useNavigate();
  return (
    <>
       <Button variant="outlined"  onClick={() => {
              navigate("/add-post");
  }
            }
  color="success" size="large">Add post</Button>

    </>
  );
}
export default BtnProfile;
