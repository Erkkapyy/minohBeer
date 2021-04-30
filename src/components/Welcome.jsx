import React, { useState } from 'react';
import Picture from '../images/minohBeerTest.jpg';

const Welcome = () => {
  console.log('lol');

  return (
    <div>
      <h1>Welcome to the Minoh Beer MDR project</h1>
      <img src={Picture} alt='testing images' />
    </div>
  );
};

export default Welcome;
