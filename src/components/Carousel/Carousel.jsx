import React from "react";
import MUICarousel from "react-material-ui-carousel";

import slide1 from "../../assets/images/slide21.jpg";
import slide2 from "../../assets/images/slide22.jpg";
import slide3 from "../../assets/images/slide23.jpg";
import "./Carousel.scss";

function Carousel() {
  const items = [slide1, slide2, slide3];

  return (
    <MUICarousel className="Carousel" indicators={false}>
      {items.map((item) => (
        <div key={item} className="slide">
          <img src={item} alt="slide" />
        </div>
      ))}
    </MUICarousel>
  );
}

export default Carousel;
