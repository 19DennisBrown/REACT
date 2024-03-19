
import React from 'react'

class Action extends React.Component{
  toggle = (a)=>{
    alert(a)
  }
  
  render(){
    return <>
      <button 
        onClick = {()=>this.toggle('Event started')}>
          Start
      </button>
    </>
  }
}

export default Action