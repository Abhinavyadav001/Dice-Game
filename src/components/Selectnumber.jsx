import React, { useState } from 'react';
import styled from 'styled-components';

const SelectNumber = ({setselectednumber,selectednumber,error}) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <p>{error} </p>
      <SmallBoxes>
        {numbers.map((number) => (
          <Box key={number} onClick={()=>setselectednumber(number)} isSelected={number === selectednumber}>{number}</Box>
        ))}
      </SmallBoxes>
      <Title>Select Number</Title>
    </Container>
  );
};
export default SelectNumber;

const Container = styled.div`
  width: 552px;
  height: 138px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SmallBoxes = styled.div`
  width: 552px;
  height: 72px;
  display: flex;
  gap: 24px;
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

const Title = styled.h1`
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-align: right;
`;
