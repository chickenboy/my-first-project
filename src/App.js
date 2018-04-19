import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buton from './Buton';
import Inp from './Inp';
import Sel from './Sel';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {status : 'no-click', numbClick : 0};
    this.buttonClick = this.buttonClick.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  buttonClick(){
    const stt = this.state.status == 'no-click' ? 'click' : 'no-click';
    const currentClick = this.state.numbClick;
    this.setState({status : stt, numbClick : currentClick + 1});
  }

  changeName(name){
    this.setState({status : name});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Buton name={this.state.status} onClick={this.buttonClick}/>
        <Inp name={this.state.numbClick}/>
        <Sel onChange={this.changeName}/>
      </div>
    );
  }
}

export default App;
