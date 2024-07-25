import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <Rules1>
      <h1>How to Play Dice Game</h1>
      <p>→ Select any number</p>
      <p>→ Click on dice image</p>
      <p>→ after click on  dice  if selected number is equal to dice number you will get same point as dice if you get wrong guess then 2 point will be dedcuted</p>
    </Rules1>
  )
}

export default Rules
const Rules1=styled.div`
    background-color: pink;
    border-radius: 10px;
    max-width: 60%;
    margin: 10px;
    padding: 10px;
    font-family:  Poppins, sans-serif;;
`
