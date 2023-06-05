import "./cube.css";
import axios from "axios";
import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

function Cube() {
  let navigate = useNavigate();
  const viewDetails = (id) => {
    navigate({
      pathname: "/admin",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  };

  
  return (
    <>
      <div className="page-container">
        <div className="cube">
        
          <div className="bottom" ></div>
          <div className="left" onClick={()=>viewDetails('left')}></div>
          <div className="right" onClick={()=>viewDetails('right')}></div>
          <div className="front" onClick={()=>viewDetails('front')}></div>
          <div className="back" onClick={()=>viewDetails('back')}></div>
          <div className="top" onClick={()=>viewDetails('top')}></div>
          <div className="cube-shadow"></div>
        </div>
      </div>
    </>
  );
}

export default Cube;