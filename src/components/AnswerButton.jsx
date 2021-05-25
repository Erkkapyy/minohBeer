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
`;

const AnswerButton = ({ buttonText, isSelected, onClick, disabled }) => {
  return (
    <Button isSelected={isSelected} onClick={onClick} disabled={disabled}>
      {buttonText}
    </Button>
  );
};

export default AnswerButton;
