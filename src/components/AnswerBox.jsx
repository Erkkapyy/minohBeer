import React, { useState } from 'react';
import styled from 'styled-components';
import AnswerButton from './AnswerButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnswerBox = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <>
      <Container>
        <AnswerButton
          isSelected={selectedAnswer === 0}
          onClick={() => setSelectedAnswer(0)}
        />
        <AnswerButton
          isSelected={selectedAnswer === 1}
          onClick={() => setSelectedAnswer(1)}
        />
      </Container>

      <Container>
        <AnswerButton
          isSelected={selectedAnswer === 2}
          onClick={() => setSelectedAnswer(2)}
        />
        <AnswerButton
          isSelected={selectedAnswer === 3}
          onClick={() => setSelectedAnswer(3)}
        />
      </Container>
    </>
  );
};

export default AnswerBox;
