import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: coral;
  border-color: black;
  border-style: solid;
  height: 100px;
  width: 800px;
`;

const QuestionBox = () => {
  return <Container>Question</Container>;
};

export default QuestionBox;
