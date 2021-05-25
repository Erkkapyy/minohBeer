import React from 'react';
import styled from 'styled-components';
import AnswerButton from './AnswerButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnswerBox = ({
  answers,
  selectedAnswer,
  setSelectedAnswer,
  isDisabled,
}) => {
  return (
    <>
      <Container>
        <AnswerButton
          buttonText={answers[0]}
          isSelected={selectedAnswer === 0}
          onClick={() => setSelectedAnswer(0)}
          disabled={isDisabled}
        />
        <AnswerButton
          buttonText={answers[1]}
          isSelected={selectedAnswer === 1}
          onClick={() => setSelectedAnswer(1)}
          disabled={isDisabled}
        />
      </Container>

      <Container>
        <AnswerButton
          buttonText={answers[2]}
          isSelected={selectedAnswer === 2}
          onClick={() => setSelectedAnswer(2)}
          disabled={isDisabled}
        />
        <AnswerButton
          buttonText={answers[3]}
          isSelected={selectedAnswer === 3}
          onClick={() => setSelectedAnswer(3)}
          disabled={isDisabled}
        />
      </Container>
    </>
  );
};

export default AnswerBox;
