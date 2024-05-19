import React from 'react';

const ExampleCarouselImage = ({ text, imgSrc, altText }) => {
  return (
    <div>
      <img src={imgSrc} alt={altText} />
      <p>{text}</p>
    </div>
  );
};

export default ExampleCarouselImage;