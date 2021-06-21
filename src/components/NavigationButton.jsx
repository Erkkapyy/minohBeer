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
  padding: 0px;
  border-style: solid;
  border-color: light-grey;
  border-radius: 0px;

  ${({ disabled }) =>
    !disabled &&
    `
  border-color: black;
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
