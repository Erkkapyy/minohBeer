import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: coral;
  border-color: black;
  border-style: solid;
  padding: 40px;
`;

const QuestionBox = ({ question }) => {
  return <Container>{question}</Container>;
};

export default QuestionBox;
