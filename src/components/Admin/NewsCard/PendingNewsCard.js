import React, { useState } from "react";
import axios from "../../../services/axios";

const PendingNewsCard = ({ title, description, imgURL, id }) => {
  const [approvedBtn, setApprovedBtn] = useState(false);
  const btnHandler = async () => {
    await axios
      .post("/addnewsapproved", {
        title: title,
        description: description,
        imgURL: imgURL,
      })
      .then(async () => {
        await axios
          .delete("/deletepending", {
            params: {
              id: id,
            },
          })
          .then(() => {
            setApprovedBtn(true);
          });
      });
  };
  return (
    <div className="col">
      <div className="card h-100" style={{ borderRadius: "20px" }}>
        <img
          src={imgURL}
          className="card-img-top"
          alt="..."
          style={{
            objectFit: "cover",
            maxHeight: "200px",
            borderRadius: "20px",
            border: "1px solid black",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ color: "black" }}>
            {description}
          </p>
          <center>
            {!approvedBtn ? (
              <button
                type="button"
                className="btn btn-success"
                onClick={btnHandler}
              >
                Approve
              </button>
            ) : (
              <button>Approved</button>
            )}
          </center>
        </div>
      </div>
    </div>
  );
};

export default PendingNewsCard;
