import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rules from './Rules';

const Rolldice = ({ dicenumber, setdicenumber, rollDice, reset }) => {
  
  const handleReset = () => {
    setdicenumber(1);
    reset();
  };

  const [showrules, setshowrules] = useState(false);
  
  const toggleRules = () => {
    setshowrules(prev => !prev);
  };

  return (
    <Container>
      <Top>
        <img src={`dice_${dicenumber}.png`} alt={`Dice showing ${dicenumber}`} onClick={rollDice} />
        <p>Click on Dice to roll</p>
      </Top>
      <Bottom>
        <button onClick={handleReset}>Reset Score</button>
        <button onClick={toggleRules}>{showrules ? "Hide Rules" : "Show Rules"}</button>
      </Bottom>
      {showrules && <Rules />}
    </Container>
  );
};



export default Rolldice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  img {
    width: 200px;
    height: 200px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  p {
    font-family: Poppins, sans-serif;
    font-weight: 600;
  }
`;

const Bottom = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  button {
      background-color:white;
      color: black;
      font-size: 18px;
      padding: 10px 20px;
      border-radius: 5px;
      transition: background-color 0.3s ease-in;
      cursor: pointer;

      &:hover {
        background-color: black;
        color: white;
        transition: background-color 0.3s ease-out;
      }
    }
`;
