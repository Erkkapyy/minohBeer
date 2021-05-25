import React from 'react';
import styled from 'styled-components';
import AnswerButton from './AnswerButton';
import { answers, correctAnswerNumbers } from './enums';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnswerBox = ({
  activeQuestion,
  selectedAnswer,
  setSelectedAnswer,
  isDisabled,
  confirmRequired,
}) => {
  //fix this empty array hack
  const activeQuestionAnswers = answers[activeQuestion] || [];
  return (
    <>
      <Container>
        <AnswerButton
          buttonText={activeQuestionAnswers[0]}
          isSelected={selectedAnswer === 0}
          onClick={() => setSelectedAnswer(0)}
          disabled={isDisabled}
          isCorrect={correctAnswerNumbers[activeQuestion] === 0}
          confirmRequired={confirmRequired}
        />
        <AnswerButton
          buttonText={activeQuestionAnswers[1]}
          isSelected={selectedAnswer === 1}
          onClick={() => setSelectedAnswer(1)}
          disabled={isDisabled}
          isCorrect={correctAnswerNumbers[activeQuestion] === 1}
          confirmRequired={confirmRequired}
        />
      </Container>

      <Container>
        <AnswerButton
          buttonText={activeQuestionAnswers[2]}
          isSelected={selectedAnswer === 2}
          onClick={() => setSelectedAnswer(2)}
          disabled={isDisabled}
          isCorrect={correctAnswerNumbers[activeQuestion] === 2}
          confirmRequired={confirmRequired}
        />
        <AnswerButton
          buttonText={activeQuestionAnswers[3]}
          isSelected={selectedAnswer === 3}
          onClick={() => setSelectedAnswer(3)}
          disabled={isDisabled}
          isCorrect={correctAnswerNumbers[activeQuestion] === 3}
          confirmRequired={confirmRequired}
        />
      </Container>
    </>
  );
};

export default AnswerBox;
