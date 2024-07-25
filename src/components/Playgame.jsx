import React from 'react';
import Score from './Score';
import Selectnumber from './Selectnumber';
import styled from 'styled-components';
import Rolldice from './Rolldice';
import { useState } from 'react';

const Playgame = () => {
  const[selectednumber,setselectednumber]=useState(null)
  const [dicenumber, setdicenumber] = useState(1);
  const[error,seterror]=useState("")
  const[score,setscore]=useState(0)
  const rollDice = () => {
    if(selectednumber==null){
      seterror("Please select a number first")
      return
    }
    else{
      seterror("")
      const newDiceNumber = Math.floor(Math.random() * 6) + 1;
      setdicenumber(newDiceNumber);

      if(selectednumber==newDiceNumber){
        setscore(prev=>prev+selectednumber)
      }
      else{
        setscore(prev=>prev-2)
      }
      setselectednumber(undefined)
    }
  };

  const reset=()=>{
    setscore(0)
  }
  return (
    <Container>
      <Top>
        <Score score={score} />
        <Selectnumber selectednumber={selectednumber} setselectednumber={setselectednumber} error={error} />
      </Top>
      <Bottom>
        <Rolldice dicenumber={dicenumber} setdicenumber={setdicenumber} rollDice={rollDice} reset={reset} />
      </Bottom>
    </Container>
  );
};

export default Playgame;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
  padding: 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
