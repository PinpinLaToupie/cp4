import React, { useState } from "react";
import "./Carousel.scss";

import photo from "../../assets/photo/photo.png";
import photo1 from "../../assets/photo/photo1.png";
import photo2 from "../../assets/photo/photo2.png";
import photo3 from "../../assets/photo/photo3.png";
import photo4 from "../../assets/photo/photo4.png";
import photo5 from "../../assets/photo/photo5.png";
import photo6 from "../../assets/photo/photo6.png";
import photo7 from "../../assets/photo/photo7.png";
import photo8 from "../../assets/photo/photo8.png";
import photo9 from "../../assets/photo/photo9.png";

const images = [
  photo,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
];

function Carousel() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = (imageId) => {
    if (selectedImage === imageId) {
      setSelectedImage(null);
    } else {
      setSelectedImage(imageId);
    }
  };

  const handleKeyDown = (event, imageId) => {
    if (event.key === "Enter") {
      handleSelectImage(imageId);
    }
  };

  return (
    <div className="main-galerie">
      <div className="frame">
        <div className="box-galery">
          {images.map((image, index) => {
            const imageId = `tableau${index + 1}`;
            return (
              <div
                key={imageId}
                className={`gallery-item ${
                  selectedImage === imageId ? "selected" : ""
                }`}
                onClick={() => handleSelectImage(imageId)}
                onKeyDown={(event) => handleKeyDown(event, imageId)}
                tabIndex={0}
                role="button"
                aria-label={`Voir le tableau ${index + 1}`}
              >
                <img src={image} alt={`Tableau ${index + 1}`} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
