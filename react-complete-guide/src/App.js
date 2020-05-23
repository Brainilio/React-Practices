import React, { Component } from "react";
import Person from "./Person/Person";
import classes from "./App.module.css";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: "sadsad", name: "Max", age: 28 },
      { id: "asda", name: "Manu", age: 29 },
      { id: "123123", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    // Find personIndex through ID. You want to find the index based on the ID; if the
    // Person's index is assignable to the id that exists there; return true.
    const personIndex = this.state.persons.findIndex(p => {
      // find index and see if it s the person iw as looking for
      return p.id === id;
    });

    // If you found the assignable id to the assignable index, you copy the single person to this object
    const person = {
      ...this.state.persons[personIndex]
    };

    // You change the name of the person object to the event.target.value that you receive from the person component
    person.name = event.target.value;

    // Then you want to copy the entire state
    const persons = [...this.state.persons];

    // change the person at the right palce, which is the personindex
    persons[personIndex] = person;

    // Set state with the updated person
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    // Copy array into new array using spread operator without changing original state (leave it immutable)
    const persons = [...this.state.persons];

    // Edit new persons with splice (delete the key-value that was given)
    persons.splice(personIndex, 1);

    // Apply new array to state using set-state
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let btnClass = "";
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              // Higher order component in higher order, key needs to be on the parent element
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
       
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }
    // Join the strings together, you'll get "red bold"
    // let classes = ['red', 'bold'].join(' ');
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}> This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'));
  }
}

// Higher order component
export default App;
