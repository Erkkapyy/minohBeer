import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  // background-color: #428bca;
  width: 150px;
  height: 150px;
  min-width: 50px;
  min-height: 50px;
  margin: 5px;

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

const Img = styled.img`
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
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
      {buttonContent.isImage && <Img src={buttonContent.img} />}
      {!buttonContent.isImage && buttonContent.text}
    </Button>
  );
};

export default AnswerButton;
