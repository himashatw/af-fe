import React, { useState, useEffect } from "react";
import SlideShow from "../SlideShow/SlideShow";
import axios from "../../../services/axios";

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios.get("/approvednews").then((response) => {
        setNews(response.data.result);
      });
    };
    getData();
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
          {news.length && (
            <SlideShow
              slideData={news}
              slideTitle={"Pending News"}
              type={"pending"}
            />
          )}
        </>
      </div>
      <div className="container mt-2" style={{ border: "1px solid black" }}>
        <></>
      </div>
    </div>
  );
}

export default News;
