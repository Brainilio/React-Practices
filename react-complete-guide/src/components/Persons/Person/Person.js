import React, { Component, Fragment } from "react";
import withClass from '../../../hoc/withClass'
import classes from "./Person.module.css";
// import Aux from '../../../hoc/Aux'

class Person extends Component {
  render() {
    // const rnd = Math.random();

    // Error
    // if(rnd > 0.7) {
    //     throw new Error('Something went wrong.')
    // }

    console.log("Person.js rendering");
    return ( 
        <Fragment> 
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        </Fragment>
    );
  }
}

export default withClass(Person, classes.Person);
