import React from "react";
import { Carousel } from "react-bootstrap";
import Brand1 from "../../../assets/brands/Brand1.png";
import Brand2 from "../../../assets/brands/Brand2.png";

const BrandCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Brand1} style={{height:'180px'}} className="d-block w-100" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Brand2} style={{height:'180px'}} className="d-block w-100" alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
