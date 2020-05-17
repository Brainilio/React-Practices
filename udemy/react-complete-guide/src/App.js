import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 'sadsad', name: "Max", age: 28 },
      { id: 'asda', name: "Manu", age: 29 },
      { id: '123123', name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };


  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: this.state.persons[0].name, age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Gabriella", age: 26 }
      ]
    });
  };

  deletePersonHandler = (personIndex) => { 
    // Copy array into new array using spread operator without changing original state (leave it immutable)
    const persons = [...this.state.persons]

    // Edit new persons with splice (delete the key-value that was given)
    persons.splice(personIndex, 1); 

    // Apply new array to state using set-state
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
           <div>
             {this.state.persons.map((person, index) => { 
               return (
                  <Person

                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age} 
                  key={index}/>
               )
             })}
            
            {/* <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Brai")}
              changed={this.nameChangedHandler}
            >
              My hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            /> */}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'));
  }
}

export default App;
