import React, { useState } from 'react';
import styled from 'styled-components';
import ChangeBeerArrow from './ChangeBeerArrow';
import arrowRight from '../images/arrowRight.png';
import arrowLeft from '../images/arrowLeft.png';

const CarouselCard = styled.img``;

const Carousel = ({ beers }) => {
  const [activeBeerIndex, setActiveBeerIndex] = useState(0);

  const decreaseBeerIndex = () => {
    const nextIndex =
      activeBeerIndex === 0 ? beers.length - 1 : activeBeerIndex - 1;
    setActiveBeerIndex(nextIndex);
  };

  const increaseBeerIndex = () => {
    const nextIndex =
      activeBeerIndex === beers.length - 1 ? 0 : activeBeerIndex + 1;
    setActiveBeerIndex(nextIndex);
  };

  return (
    <>
      <ChangeBeerArrow
        src={arrowLeft}
        alt='previousBeerButton'
        onClick={() => decreaseBeerIndex()}
      />
      <CarouselCard src={beers[activeBeerIndex]} />
      <CarouselCard
        src={
          beers[activeBeerIndex === beers.length - 1 ? 0 : activeBeerIndex + 1]
        }
      />
      <CarouselCard
        src={
          beers[
            activeBeerIndex === beers.length - 2
              ? 0
              : activeBeerIndex === beers.length - 1
              ? 1
              : activeBeerIndex + 2
          ]
        }
      />
      <ChangeBeerArrow
        src={arrowRight}
        alt='nextBeerButton'
        onClick={() => increaseBeerIndex()}
      />
    </>
  );
};

export default Carousel;
