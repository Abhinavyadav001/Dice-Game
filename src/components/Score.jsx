import React from 'react';
import styled from 'styled-components';

const Score = ({score}) => {
  return (
    <ScoreContainer>
      <ScoreValue>{score}</ScoreValue>
      <ScoreLabel>Total Score</ScoreLabel>
    </ScoreContainer>
  );
}

export default Score;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
`;

const ScoreValue = styled.h1`
  font-size: 96px;
  font-weight: 100;
  margin: 0;
`;

const ScoreLabel = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  font-family: Poppins, sans-serif;
`;
