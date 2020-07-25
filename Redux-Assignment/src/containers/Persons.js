import React, { Component } from "react"
import * as actionTypes from "../store/action"
import { connect } from "react-redux"
import Person from "../components/Person/Person"
import AddPerson from "../components/AddPerson/AddPerson"

class Persons extends Component {
	render() {
		return (
			<div>
				<AddPerson personAdded={this.props.onAddPerson} />
				{this.props.persons.map((person) => (
					<Person
						key={person.id}
						name={person.name}
						age={person.age}
						clicked={() => this.props.onDeletePerson(person.id)}
					/>
				))}
			</div>
		)
	}
}

//state to props
const mapStateToProps = (state) => {
	return {
		persons: state.persons,
	}
}

//dispatch
const mapDispatchToProps = (dispatch) => {
	return {
		onAddPerson: (id, name, age) =>
			dispatch({
				type: actionTypes.ADD_PERSON,
				id: id,
				name: name,
				age: age,
			}),
		onDeletePerson: (id) =>
			dispatch({
				type: actionTypes.DELETE_PERSON,
				id: id,
			}),
	}
}

//connection to store
export default connect(mapStateToProps, mapDispatchToProps)(Persons)
