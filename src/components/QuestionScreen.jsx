import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionBox from './QuestionBox';
import AnswerBox from './AnswerBox';
import NextButton from './NextButton';
import { questions, answers } from './enums';

const QuestionScreen = ({ isVisible }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  console.log('active question index: ', activeQuestion);

  return (
    isVisible && (
      <>
        <QuestionBox question={questions[activeQuestion]} />
        <AnswerBox
          //fix this empty array hack
          answers={answers[activeQuestion] || []}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />
        <NextButton
          //do something to hacked index limitator
          onClick={() =>
            activeQuestion < 4 && setActiveQuestion(activeQuestion + 1)
          }
          disabled={selectedAnswer === null}
        />
      </>
    )
  );
};

export default QuestionScreen;
