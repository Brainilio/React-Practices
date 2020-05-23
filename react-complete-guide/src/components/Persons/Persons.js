import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  render() {
    console.log("persons.js rendering...");
    return this.props.persons.map((person, index) => {
      return (
        // Higher order component in higher order, key needs to be on the parent element
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
