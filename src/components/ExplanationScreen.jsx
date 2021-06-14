import React from 'react';
import styled from 'styled-components';
import { explanations, questions } from './enums';
import NavigationButton from './NavigationButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: black;
  border-style: solid;
  padding: 40px;
  margin-bottom: 50px;
`;

const ExplanationScreen = ({
  isVisible,
  switchView,
  activeQuestion,
  setActiveQuestion,
}) => {
  const onClick = () => {
    // if (activeQuestion < questions.length - 1) {
    setActiveQuestion(activeQuestion + 1);
    switchView();
    // }
  };

  return (
    isVisible && (
      <>
        <Container>{explanations[activeQuestion]}</Container>
        <NavigationButton onClick={() => onClick()} />
      </>
    )
  );
};

export default ExplanationScreen;
