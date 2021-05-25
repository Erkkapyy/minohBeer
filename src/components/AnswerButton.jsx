import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  // background-color: #428bca;
  padding: 90px;
  margin: 50px;

  ${({ isSelected }) =>
    isSelected &&
    `
  border-color: black;
  border-style: solid;
  `}

  ${({ isCorrect, confirmRequired }) =>
    isCorrect &&
    !confirmRequired &&
    `
  border-color: green;
  border-style: solid;
  `}

  ${({ isSelected, isCorrect, confirmRequired }) =>
    isSelected &&
    !isCorrect &&
    !confirmRequired &&
    `
  border-color: red;
  border-style: solid;
  `}
`;

const AnswerButton = ({
  buttonText,
  isSelected,
  onClick,
  disabled,
  isCorrect,
  confirmRequired,
}) => {
  return (
    <Button
      isSelected={isSelected}
      onClick={onClick}
      disabled={disabled}
      isCorrect={isCorrect}
      confirmRequired={confirmRequired}
    >
      {buttonText}
    </Button>
  );
};

export default AnswerButton;
