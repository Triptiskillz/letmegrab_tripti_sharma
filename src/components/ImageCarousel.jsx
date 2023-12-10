import React from "react";
import { Carousel } from "react-bootstrap";

import img3 from "../images/Coffee 4.webp";
import img4 from "../images/Coffee 5.webp";
import img5 from "../images/Coffee 7.webp";

// ImageCarousel component to display a Bootstrap Carousel with given images
const ImageCarousel = () => {
  // Array of images to be displayed in the Carousel
  const images = [img3, img4, img5];

  return (
    <Carousel>
      {/* Map through the images array to create Carousel items */}
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          {/* Display each image in a Carousel item */}
          <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
