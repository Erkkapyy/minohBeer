import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  // background-color: #428bca;
  min-width: 150px;
  min-height: 100px;
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
  buttonContent,
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
      {buttonContent.isImage && <img src={buttonContent.img}></img>}
      {!buttonContent.isImage && buttonContent.text}
    </Button>
  );
};

export default AnswerButton;
