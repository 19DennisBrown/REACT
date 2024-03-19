

import React from 'react'
class Driver extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        age: 11,
        nationality : 'Kenyan',
        work : 'driver',
      }
    }
    changeNationality = ()=>{
      this.setState({nationality:'Uganda'})
    }
    render(){
      return <>
        <h2>
          Profession is {this.state.work}
        </h2>
        <button 
          onClick={this.changeNationality}
        >
          Switch
        </button>
        <h3>
          <i>
            {this.state.nationality}
          </i>
        </h3>
      </>
    }
}
export default Driver