import React, { useState } from "react";
import SlideShow from "../SlideShow/SlideShow";
import speakers from "./Speaker.json";
import axios from "../../../services/axios";

function News() {
  useState(() => {}, []);
  return (
    <div className="news">
      <div className="container mt-2" style={{ border: "1px solid black" }}>
        <center>
          <h1 style={{ fontSize: "1.5rem" }}>Requesting Approvals</h1>
        </center>
      </div>
      <div className="container mt-2" style={{ border: "1px solid black" }}>
        <>
          <SlideShow slideData={speakers} slideTitle={"Pending News"} />
        </>
      </div>
      <div className="container mt-2" style={{ border: "1px solid black" }}>
        <>
          {/* <SlideShow slideData={speakers} slideTitle={"Approved News"} /> */}
        </>
      </div>
    </div>
  );
}

export default News;
