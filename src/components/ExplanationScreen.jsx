import React from 'react';
import styled from 'styled-components';
import { explanations } from './enums';
import NavigationButton from './NavigationButton';
import YoutubeEmbed from './YoutubeEmbed';

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
    setActiveQuestion(activeQuestion + 1);
    switchView();
  };

  return (
    isVisible && (
      <>
        <Container>
          <p style={{ whiteSpace: 'pre-wrap' }}>
            {explanations[activeQuestion].text}
          </p>
        </Container>
        {explanations[activeQuestion].hasVideo && (
          <YoutubeEmbed embedId={explanations[activeQuestion].videoUrl} />
        )}
        <NavigationButton onClick={() => onClick()} />
      </>
    )
  );
};

export default ExplanationScreen;
