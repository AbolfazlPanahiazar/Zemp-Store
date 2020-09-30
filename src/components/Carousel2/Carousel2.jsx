import React from "react";
import MUICarousel from "react-material-ui-carousel";

import slide1 from "../../assets/images/slide11.jpg";
import slide2 from "../../assets/images/slide12.jpg";
import "./Carousel.scss";

function Carousel() {
  const items = [slide1, slide2];

  return (
    <MUICarousel className="Carousel" indicators>
      {items.map((item) => (
        <div key={item} className="slide">
          <img src={item} alt="slide" />
        </div>
      ))}
    </MUICarousel>
  );
}

export default Carousel;
