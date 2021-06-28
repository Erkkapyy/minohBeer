import React from 'react';
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
  return <Container style={{ whiteSpace: 'pre-wrap' }}>{question}</Container>;
};

export default QuestionBox;
