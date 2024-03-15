import React from "react"




class Driver extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      age : 23,
      nationality: 'Kenyan',
    };
    // componentDidMount(){
    //   setTimeout(() => {
    //     this.setState({age: 25})
    //   }, 1000);
    };
    changeNationality = () =>{
      this.setState({nationality:"Ugandan"})
    };
  };
  render(){
   return  <>
      <h2>This is the {this.props.work}. Driver is a {this.state.nationality}.</h2>;
      <button
        type="button"
        onClick={this.changeNationality} 
      >
        Change Country
      </button>;
    </>;
  }
}
export default Driver 
