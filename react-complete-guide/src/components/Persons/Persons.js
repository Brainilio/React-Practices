import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {

//  static getDerivedStateFromProps(props, state) {
//       console.log('Persons.js getderivedstatefromprops')
//       return state; 
//   }

// componentWillReceiveProps(props) { 
//     console.log('personsjs componentwillreceive', props)
// }

  shouldComponentUpdate(nextProps, nextState) {    
    // compare props that you'll receive with the current props and then make a condition
    // This should always return true or false. 
    console.log("Persons.js shouldcomponentupdate");
    return true; 
  }

  getSnapshotBeforeUpdate(prevProps, prevState) { 
      console.log('Personsjs getsnapshotbeforeupdate')
      return {message: 'Snapshot'}; 
  }

//   componentWillUpdate() { 
//       console.log('persons js componentwillupdate')
//   }

  componentDidUpdate(prevProps, prevState, snapshot) { 
      console.log('personsjs componentdidupdate')
      console.log(snapshot);
  }

  componentWillUnmount() { 
      console.log('Personsjs components will unmount')
  }
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
