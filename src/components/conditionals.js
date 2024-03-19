

import React from 'react'

function Scored(props){
  const scorers = ['Ford', 'BMW', 'Audi'];
  function Score(){
    return <>
      <h1>GOAL!!!</h1>
    </>
  }
  function Missed(){
    return <>
      <h1>MISSED!!!</h1>
    </>
  }
  const isGoal = props.isGoal
  if(isGoal){
    return <>
      <Score/>
      {scorers.length > 0 && 
        <i>Scored {scorers.length} goals</i>
      }
    </>
  }
  else{
    return <>
      <Missed/>
    </>
  }
}

export default Scored