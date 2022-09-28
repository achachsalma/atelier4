import React, { Component } from 'react';
import './App.css';
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    };
    this.incrementer=this.incrementer.bind(this);
    this.decrementer=this.decrementer.bind(this);
    this.initialiser=this.initialiser.bind(this);
  }
  incrementer(){
    this.setState({count:this.state.count+1});
  }
  decrementer(){
    this.setState({count:this.state.count-1});
  }
  initialiser(){
    this.setState({count:0});
  }
  render(){
    return <div>
<h1>{this.state.count}</h1>
<button onClick={this.incrementer}>incrementer</button>
<button onClick={this.decrementer}>decrementer</button>
<button onClick={this.initialiser}>initialiser</button>
    </div>
  }
}

function App() {
  return (
    <div className="App">
<Counter/>
    </div>
  );
}

export default App;
