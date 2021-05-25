import React from 'react';
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

const NavigationButton = ({ isConfirmButton, onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {isConfirmButton ? 'Confirm' : 'Next'}
    </Button>
  );
};

export default NavigationButton;
