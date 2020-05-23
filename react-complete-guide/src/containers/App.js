import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) { 
    super(props);
    console.log('|App.js| constructor')


    // this.state = {
    //   persons: [
    //     { id: "sadsad", name: "Max", age: 28 },
    //     { id: "asda", name: "Manu", age: 29 },
    //     { id: "123123", name: "Stephanie", age: 26 }
    //   ],
    //   otherState: "some other value",
    //   showPersons: false
    // };
  }

  // This is a modern syntax that does all of the above for you 
  state = {
    persons: [
      { id: "sadsad", name: "Max", age: 28 },
      { id: "asda", name: "Manu", age: 29 },
      { id: "123123", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps', props)
    return state; 
  }

  // componentWillMount() { 
  //   console.log('APPjs componentwillmount')
  // }

  componentDidMount() { 
    console.log('app js componentdidmount')
  }

  shouldComponentUpdate(nextProps, nextState) { 
    console.log('app.js shouldcomponentupdate?')
    return true; 
  }

  componentDidUpdate() { 
    console.log('app.js componentdidupdate');
  }
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
    console.log('App.js render')
    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/> 
    }
   
    return (
      <div className={classes.App}>
        <button onClick={() => { 
          this.setState({
            showCockpit: false
          })}}>Remove cockpit</button>
          {this.state.showCockpit ?  (  
            <Cockpit
              title={this.props.appTitle}
              persons={this.state.persons}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
        />

          ) : null}
       
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'));
  }
}

// Higher order component
export default App;
