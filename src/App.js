import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      "string" : "hi just testing",
      "changeMe" : "Hi this is me",
    } 
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hi there</p>
        <p>{this.state.string}</p>
        <h1>{this.state.changeMe}</h1>
        <button onClick={ () => this.setState({changeMe:"Hello World"})}>Chnage me</button>

        <button onClick={ ()=> this.setState({string : "changed"})}>Chnage TExt</button>
      </header>
    </div>
    )
  }
}

export default App;
