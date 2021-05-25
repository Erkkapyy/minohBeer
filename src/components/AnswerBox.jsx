import React, { useState } from 'react';
import styled from 'styled-components';
import AnswerButton from './AnswerButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnswerBox = ({ answers, selectedAnswer, setSelectedAnswer }) => {
  return (
    <>
      <Container>
        <AnswerButton
          buttonText={answers[0]}
          isSelected={selectedAnswer === 0}
          onClick={() => setSelectedAnswer(0)}
        />
        <AnswerButton
          buttonText={answers[1]}
          isSelected={selectedAnswer === 1}
          onClick={() => setSelectedAnswer(1)}
        />
      </Container>

      <Container>
        <AnswerButton
          buttonText={answers[2]}
          isSelected={selectedAnswer === 2}
          onClick={() => setSelectedAnswer(2)}
        />
        <AnswerButton
          buttonText={answers[3]}
          isSelected={selectedAnswer === 3}
          onClick={() => setSelectedAnswer(3)}
        />
      </Container>
    </>
  );
};

export default AnswerBox;
