import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 150px;
  height: 150px;
  margin: 5px;
  padding: 0px;
  border-style: solid;
  border-color: #d3d3d3;
  border-width: 3px;
  -webkit-appearance: none;
  border-radius: 0px;

  ${({ isSelected }) =>
    isSelected &&
    `
  border-color: black;
  `}

  ${({ isCorrect, confirmRequired }) =>
    isCorrect &&
    !confirmRequired &&
    `
  border-color: green;
  `}

  ${({ isSelected, isCorrect, confirmRequired }) =>
    isSelected &&
    !isCorrect &&
    !confirmRequired &&
    `
  border-color: red;
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
      style={{ whiteSpace: 'pre-wrap' }}
    >
      {buttonContent.isImage && <Img src={buttonContent.img} />}
      {!buttonContent.isImage && buttonContent.text}
    </Button>
  );
};

export default AnswerButton;
