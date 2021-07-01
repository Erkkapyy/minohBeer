import React from 'react';
import styled from 'styled-components';
import { explanations } from './enums';
import NavigationButton from './NavigationButton';
import YoutubeEmbed from './YoutubeEmbed';

export const ExplanationContainer = styled.div`
  max-width: 600px;
  max-height: 2000px;
  min-width: 50px;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-color: black;
  border-style: solid;
  padding: 40px;
  margin: 0px 25px 40px 25px;
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
        <ExplanationContainer>
          <p style={{ whiteSpace: 'pre-wrap' }}>
            {explanations[activeQuestion].jText}
          </p>
          <p style={{ whiteSpace: 'pre-wrap' }}>
            {explanations[activeQuestion].eText}
          </p>
        </ExplanationContainer>
        {explanations[activeQuestion].hasVideo && (
          <YoutubeEmbed embedId={explanations[activeQuestion].videoId} />
        )}
        <NavigationButton onClick={() => onClick()} />
      </>
    )
  );
};

export default ExplanationScreen;
