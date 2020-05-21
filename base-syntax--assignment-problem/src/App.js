import React, { Component } from 'react';
import UserOutput from './components/UserOutput'
import UserInput from './components/UserInput'
import './App.css';

class App extends Component {
  state = { 
    username: "Brainilio"
  }

  FormChangeHandler = (event) => { 
    this.setState({ 
      username: event.target.value
    })
  }

  render() {

    return (
      <div className="App">
        <UserInput name={this.state.username} changed={this.FormChangeHandler}/>
        <UserOutput name={this.state.username}/> 
      </div>
    );
  }
}

export default App;
