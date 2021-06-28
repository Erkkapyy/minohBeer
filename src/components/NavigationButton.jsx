import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100px;
  min-width: 50px;
  min-height: 40px;
  margin: auto;
  margin-bottom: 50px;
  border-style: solid;
  border-color: #d3d3d3;
  border-width: 3px;
  -webkit-appearance: none;
  border-radius: 0px;

  ${({ disabled }) =>
    !disabled &&
    `
  border-color: black;
  `}
`;

const NavigationButton = ({ isConfirmButton, onClick, disabled }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      style={{ whiteSpace: 'pre-wrap' }}
    >
      {isConfirmButton ? '確認' + '\n' + 'Confirm' : '次へ' + '\n' + 'Next'}
    </Button>
  );
};

export default NavigationButton;
