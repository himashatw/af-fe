import React from "react";

const NewsCard = ({ title, description, imgURL, id }) => {
  const btnHandler = () => {
    alert(id);
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
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
