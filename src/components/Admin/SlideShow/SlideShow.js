import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./SlideShow.css";
import NewsCard from "../NewsCard/NewsCard";
import PendingNewsCard from "../NewsCard/PendingNewsCard";

const responsive = {
  0: {
    items: 1,
  },
  600: {
    items: 2,
  },
  1000: {
    items: 4,
  },
};
let slider;
const slideNext = () => {
  slider.next(500);
};
const slidePrev = () => {
  slider.prev(500);
};
const slidePrevKeyBoard = (e) => {
  if (e.keyCode === 37) {
    slidePrev();
  }
};
const slideNextKeyBoard = (e) => {
  if (e.keyCode === 39) {
    slideNext();
  }
};

const SlideShow = ({ slideData, slideTitle, type }) => {
  return (
    <div className="past-speaker-container" style={{ zIndex: "1000" }}>
      <h4>
        {slideTitle} [{slideData.length}]
      </h4>
      <div className="nav-button-wrapper">
        <div className="view-more">View More</div>
        <div
          className="owl-button-prev"
          onClick={slidePrev}
          onKeyDown={slidePrevKeyBoard}
          role="button"
          tabIndex={0}
        >
          <i className="far fa-arrow-alt-circle-left" />
        </div>
        <div
          className="owl-button-next"
          onClick={slideNext}
          onKeyDown={slideNextKeyBoard}
          role="button"
          tabIndex={0}
        >
          <i className="far fa-arrow-alt-circle-right" />
        </div>
      </div>

      <div className="container-fluid">
        <OwlCarousel
          className="owl-theme"
          dots={true}
          margin={70}
          responsive={responsive}
          ref={(slide) => {
            slider = slide;
          }}
        >
          {slideData.map((speaker) =>
            type === "approved" ? (
              <NewsCard
                id={speaker._id}
                title={speaker.title}
                description={speaker.description}
                imgURL={speaker.imgURL}
                key={speaker._id}
              />
            ) : (
              <PendingNewsCard
                id={speaker._id}
                title={speaker.title}
                description={speaker.description}
                imgURL={speaker.imgURL}
                key={speaker._id}
              />
            )
          )}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default SlideShow;
