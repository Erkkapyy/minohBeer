import React, { useState } from 'react';
import QuestionBox from './QuestionBox';
import AnswerBox from './AnswerBox';
import NavigationButton from './NavigationButton';
import { questions, answers } from './enums';

const QuestionScreen = ({ isVisible, activeQuestion, switchView }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [confirmRequired, setConfirmRequired] = useState(true);
  const [areAnswersDisabled, setAreAnswersDisabled] = useState(false);

  const onConfirm = () => {
    setConfirmRequired(false);
    setAreAnswersDisabled(true);
  };

  const onNext = () => {
    setSelectedAnswer(null);
    setConfirmRequired(true);
    setAreAnswersDisabled(false);
    switchView();
  };

  return (
    isVisible && (
      <>
        <QuestionBox question={questions[activeQuestion]} />
        <AnswerBox
          //fix this empty array hack
          answers={answers[activeQuestion] || []}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          isDisabled={areAnswersDisabled}
        />
        <NavigationButton
          isConfirmButton={confirmRequired}
          onClick={confirmRequired ? () => onConfirm() : () => onNext()}
          disabled={selectedAnswer === null}
        />
      </>
    )
  );
};

export default QuestionScreen;
