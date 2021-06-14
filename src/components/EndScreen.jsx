import React from 'react';

const EndScreen = ({ score }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>終わり</h1>
      <h2>スコア: {score}/5</h2>
    </div>
  );
};

export default EndScreen;
