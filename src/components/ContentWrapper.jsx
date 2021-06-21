import React, { useState } from 'react';
import styled from 'styled-components';
import ExplanationScreen from './ExplanationScreen';
import QuestionScreen from './QuestionScreen';
import EndScreen from './EndScreen';
import { questions } from './enums';

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  margin-right: 25px;
`;

const ContentWrapper = () => {
  const [activeQuestionNumber, setActiveQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuestionScreenVisible, setIsQuestionScreenVisible] = useState(true);

  const switchView = () => {
    setIsQuestionScreenVisible(!isQuestionScreenVisible);
  };

  return activeQuestionNumber < questions.length ? (
    <Container>
      <QuestionScreen
        isVisible={isQuestionScreenVisible}
        switchView={switchView}
        activeQuestion={activeQuestionNumber}
        setActiveQuestion={setActiveQuestionNumber}
        score={score}
        setScore={setScore}
      />
      <ExplanationScreen
        isVisible={!isQuestionScreenVisible}
        switchView={switchView}
        activeQuestion={activeQuestionNumber}
        setActiveQuestion={setActiveQuestionNumber}
      />
    </Container>
  ) : (
    <EndScreen score={score} />
  );
};

export default ContentWrapper;
