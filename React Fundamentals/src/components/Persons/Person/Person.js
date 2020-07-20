import React, { Component, Fragment } from "react";
import withClass from '../../../hoc/withClass'
import classes from "./Person.module.css";
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'
// import Aux from '../../../hoc/Aux'

class Person extends Component {

  // Store ref in input-element
  constructor(props) { 
    super(props);
    this.inputElementRef = React.createRef();
  }

  // Give access to context even in componentdidmount
  static contextType = AuthContext; 

  componentDidMount() { 
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated)
  }


  render() {
    console.log("Person.js rendering");
    return ( 
        <Fragment> 
              {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
           
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          /* Special property you can pass into any component */
          /* ref={(inputEl) => {this.inputElement = inputEl}} */
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
        </Fragment>
    );
  }
}



// Make sure to let know that your props should have these datatypes
Person.propTypes = {
  click: PropTypes.func, 
  name: PropTypes.string, 
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
