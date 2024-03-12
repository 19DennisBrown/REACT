import logo from './logo.svg';
import './App.css';
import Driver from './components/one.js'
import Fetch from './components/api.js'
import React from 'react'


function App() {
  // Function
  const x = 5;
  let text = "Goodbye";
  if (x < 10) {
    text = "Hello";
  }
  // Class component
  class Car extends React.Component{
    render(){
      return <>
        <h1>{5+9}</h1>
      </>
    }
  }
  // function components
  function Lorry(props){
    return <h1>{props.name}</h1>
  }
  
  return (
    <div className="App">
      
      <h1>{text}</h1>
      <Car name="Car" />
      <Lorry name="Lorry" />
      <Driver work="Drivers" />
      <  Fetch />
    </div>
  );
}

export default App;
