import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionScreen from './QuestionScreen';

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const QuestionWrapper = () => {
  return (
    <Container>
      <QuestionScreen isVisible={true} />
    </Container>
  );
};

export default QuestionWrapper;
