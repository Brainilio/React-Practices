import React, {useEffect} from "react";
import classes from './Cockpit.module.css';

const Cockpit = props => {

    useEffect(() => { 
        // Will run for every render cycle
        console.log('Cockpit.js useffect')
         // HTTP Request... Also runs when component gets created.
         setTimeout(() => { 
             alert('Saved data to cloud!')
         }, 1000); 
         return () => {
             console.log('Cockpitjs cleanup work in useeffect')
         };
    }, []);

    useEffect(() => { 
        console.log('cockpit js 2nd useeffect')
        return () => {
            console.log('Cockpitjs 2nd cleanup work in useeffect')
        };
        // Without cleanup function or 2nd arguments.
    })


    const assignedClasses = [];
    let btnClass = "";

    if(props.showPersons) {
        btnClass = classes.Red;
     }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }


  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}> This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default Cockpit;
