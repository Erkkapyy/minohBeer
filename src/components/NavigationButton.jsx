import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  min-height: 100px;

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
      {isConfirmButton ? '確認' : '次へ'}
    </Button>
  );
};

export default NavigationButton;
