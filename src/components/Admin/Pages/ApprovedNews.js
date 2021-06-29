import React from "react";
import SlideShow from "../SlideShow/SlideShow";
import speakers from "./Speaker.json";

function Reports() {
  return (
    <div className="news">
      <div className="container mt-2" style={{ border: "1px solid black" }}>
        <center>
          <h1 style={{ fontSize: "1.5rem" }}>Approved News</h1>
        </center>
      </div>
      <div className="container mt-2" style={{ border: "1px solid black" }}>
        <>
          <SlideShow slideData={speakers} slideTitle={"Approved"} />
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

export default Reports;
