import React, { useState } from 'react';
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

const AnswerButton = ({ isSelected, onClick }) => {
  return (
    <Button isSelected={isSelected} onClick={onClick}>
      Answer
    </Button>
  );
};

export default AnswerButton;
