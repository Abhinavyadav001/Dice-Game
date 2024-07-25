import React from 'react';
import styled from 'styled-components';

const FirstPage = ({toggle}) => {
  return (
    <Container>
      <div className='left'>
        <img src="./dices.png" alt="" />
      </div>
      <div className="right">
        <h1>DICE GAME</h1>
        <button onClick={toggle}>Play Now</button>
      </div>
    </Container>
  );
};

export default FirstPage;

const Container = styled.div`
  max-width: 1180px;
  height: 90vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .right {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }

    button {
      background-color: black;
      color: white;
      font-size: 18px;
      padding: 10px 20px;
      border-radius: 5px;
      transition: background-color 0.3s ease-in;
      cursor: pointer;

      &:hover {
        background-color: white;
        color: black;
        transition: background-color 0.3s ease-out;
      }
    }
  }
`;
