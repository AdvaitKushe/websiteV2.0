import React, { useState, useEffect } from "react";
import i1 from "../../img/i1.jpeg";
import i2 from "../../img/i2.jpg";
import i3 from "../../img/i3.jpeg";
import i4 from "../../img/i4.jpeg";
import i5 from "../../img/i5.jpeg";
import i6 from "../../img/i6.jpeg";

import { Circle, CircleDot } from "lucide-react";
import "../../styles/image-slider.css";

const images = [
  { url: i1, alt: "Image 1" },
  
  { url: i3, alt: "Image 3" },
  { url: i4, alt: "Image 4" },
  { url: i6, alt: "Image 4" },
  { url: i5, alt: "Image 4" },
  
  
  
];

export function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    }, 3000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}

export default ImageSlider;
