import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;

  ${({ isSelected }) =>
    isSelected &&
    `
  border-color: black;
  border-style: solid;
  `}
`;

const NextButton = ({ isSelected, onClick, disabled }) => {
  return (
    <Button isSelected={isSelected} onClick={onClick} disabled={disabled}>
      Next
    </Button>
  );
};

export default NextButton;
