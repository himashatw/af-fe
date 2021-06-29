import React, { useState, useEffect } from "react";
import SlideShow from "../SlideShow/SlideShow";
import speakers from "./Speaker.json";
import axios from "../../../services/axios";

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios.get("/approvednews").then((response) => {
        setNews(response.data.result);
      });
    };
  }, []);
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
