import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionBox from './QuestionBox';
import AnswerBox from './AnswerBox';

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const QuestionScreen = () => {
  return (
    <Container>
      <div>
        <QuestionBox />
      </div>
      <div>
        <AnswerBox />
      </div>
    </Container>
  );
};

export default QuestionScreen;
