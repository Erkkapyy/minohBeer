import React, { useState } from 'react';
import styled from 'styled-components';
import ExplanationScreen from './ExplanationScreen';
import QuestionScreen from './QuestionScreen';

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = () => {
  const [activeQuestionNumber, setActiveQuestionNumber] = useState(0);
  const [isQuestionScreenVisible, setIsQuestionScreenVisible] = useState(true);

  const switchView = () => {
    setIsQuestionScreenVisible(!isQuestionScreenVisible);
  };

  return (
    <Container>
      <QuestionScreen
        isVisible={isQuestionScreenVisible}
        switchView={switchView}
        activeQuestion={activeQuestionNumber}
        setActiveQuestion={setActiveQuestionNumber}
      />
      <ExplanationScreen
        isVisible={!isQuestionScreenVisible}
        switchView={switchView}
        activeQuestion={activeQuestionNumber}
        setActiveQuestion={setActiveQuestionNumber}
      />
    </Container>
  );
};

export default ContentWrapper;
