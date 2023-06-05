import React from "react";
import Navbar from "../components/Navbar";
import BtnPost from "../components/BtnPost";
import left from "../assets/images/left.jpg";
import right from "../assets/images/right.jpg";
import front from "../assets/images/front.jpg";
import back from "../assets/images/back.jpg";

import { useEffect, useState, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";

//admin/?left
function ViewAdminPost() {
  const DUMMY_POSTS = [
    {
      id: "left",
      location: "France",
      description:
        ' The Eiffel Tower is the most visited monument with an entrance fee in the world: 6.91 million people ascended it in 2015. It was designated a monument historique in 1964, and was named part of a UNESCO World Heritage Site ("Paris, Banks of the Seine") in 1991',
    },
    {
      id: "right",
      location: "Africa",
      description:
        "Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.4 billion people as of 2021, it accounts for about 18% of the world's human population. Africa's population is the youngest amongst all the continents; the median age in 2012 was 19.7, when the worldwide median age was 30.4. ",
    },
    {
      id: "front",
      location: "Japan",
      description:
        "Mount Fuji (富士山, Fujisan, Japanese: [ɸɯꜜ(d)ʑisaɴ] (listen)), or Fugaku, located on the island of Honshū, is the highest mountain in Japan, with a summit elevation of 3,776.24 m (12,389 ft 3 in).Mount Fuji is an active stratovolcano that last erupted from 1707 to 1708.The mountain is located about 100 km (62 mi) southwest of Tokyo and is visible from there on clear days. Mount Fuji is exceptionally symmetrical cone, which is covered in snow for about five months of the year",
    },
    {
      id: "back",
      location: "Egypt",
      description:
        " All Egyptian pyramids were built on the west bank of the Nile, which, as the site of the setting sun, was associated with the realm of the dead in Egyptian mythology.  ",
    },

    {
      id: "top",
      location: "Grand Canyon",
      description:
        "The Grand Canyon is a river valley in the Colorado Plateau that exposes uplifted Proterozoic and Paleozoic strata,[14] and is also one of the six distinct physiographic sections of the Colorado Plateau province.[15] Even though it is not the deepest canyon in the world (Kali Gandaki Gorge in Nepal is much deeper[16]), the Grand Canyon is known for its visually overwhelming size and its intricate and colorful landscape. Geologically, it is significant because of the thick sequence of ancient rocks that are well preserved and exposed in the walls of the canyon. These rock layers record much of the early geologic history of the North American continent.[7]...",
    },
  ];

  const [postObject, setPostObject] = useState(null);
  const [id, setId] = useState(null);
  const [searchParams] = useSearchParams();
  const updateSomething = () => {
    setId(searchParams.get("id"));
    setPostObject(DUMMY_POSTS.find((obj) => obj.id == id));
  };

  const memoizedValue = useMemo(
    () => updateSomething(searchParams.get("id")),
    [searchParams]
  );
  const prevMemoizedValue = useRef(null);
  //single post
  useEffect(() => {
    if (memoizedValue !== prevMemoizedValue) {
      updateSomething();
    }
    prevMemoizedValue.current = memoizedValue;
  }, [memoizedValue]);

  return (
    <>
      <Navbar />
      <h1
        style={{
          margin: "0 auto",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "300",
          color: "#333",
        }}
      >
        Recommended post
      </h1>
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
            border: "1px solid transparent",
            borderLeft: "1px solid #333",
            borderTop: "1px solid #333",
            paddingLeft: "20px",
            height: "20em",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            gap: "3em",
            margin: "0 auto",
            marginTop: "5em",
          }}
        >
          <div className="container-img"></div>
          <h3
            style={{
              color: "#333",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "300",
            }}
          >
            {postObject && postObject.location}
          </h3>
          <h5
            style={{
              color: "#333",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "300",
              lineHeight: "1.4",
            }}
          >
            {postObject && postObject.description}
          </h5>
        </div>
      </div>
    </>
  );
}

export default ViewAdminPost;
