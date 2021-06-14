import React, { useState } from 'react';
import QuestionBox from './QuestionBox';
import AnswerBox from './AnswerBox';
import NavigationButton from './NavigationButton';
import { questions, correctAnswerNumbers } from './enums';

const QuestionScreen = ({
  isVisible,
  activeQuestion,
  switchView,
  score,
  setScore,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [confirmRequired, setConfirmRequired] = useState(true);
  const [areAnswersDisabled, setAreAnswersDisabled] = useState(false);

  const onConfirm = () => {
    setConfirmRequired(false);
    setAreAnswersDisabled(true);
    if (selectedAnswer === correctAnswerNumbers[activeQuestion]) {
      setScore(score + 1);
    }
  };

  const onNext = () => {
    setSelectedAnswer(null);
    setConfirmRequired(true);
    setAreAnswersDisabled(false);
    switchView();
  };

  return (
    isVisible &&
    activeQuestion < questions.length && (
      <>
        <QuestionBox question={questions[activeQuestion]} />
        <AnswerBox
          activeQuestion={activeQuestion}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          isDisabled={areAnswersDisabled}
          confirmRequired={confirmRequired}
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
