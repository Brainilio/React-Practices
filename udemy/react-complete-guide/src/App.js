import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = (newName) => {
    // change state dynamically
    // don't do this this.state.persons[0].name = 'Brainilio'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Darla", age: 29 },
        { name: "Gabriella", age: 26 }
      ]
    });
  };


  nameChangedHandler = (event) => { 
    this.setState({
      persons: [
        { name: this.state.persons[0].name, age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Gabriella", age: 26 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Brai')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Brai')}
          changed={this.nameChangedHandler}
        >
          My hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'));
  }
}

export default App;
