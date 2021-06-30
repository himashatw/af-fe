import React, { useState, useEffect } from "react";
import SlideShow from "../SlideShow/SlideShow";
import axios from "../../../services/axios";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  useEffect(async () => {
    await axios.get("/keynotespeakers").then((response) => {
      setSpeakers(response.data.result);
    });
  }, []);
  return (
    <div className="speakers">
      <div className="container mt-2" style={{ border: "1px solid black" }}>
        <center>
          <h1 style={{ fontSize: "1.5rem" }}>Keynote Speakers</h1>
        </center>
      </div>
      <div className="container mt-2" style={{ border: "1px solid black" }}>
        <>
          {speakers.length && (
            <SlideShow
              slideData={speakers}
              slideTitle={"Speakers"}
              type={"approved"}
            />
          )}
        </>
      </div>
      <div className="container mt-2" style={{ border: "1px solid black" }}>
        <></>
      </div>
    </div>
  );
};

export default Speakers;
