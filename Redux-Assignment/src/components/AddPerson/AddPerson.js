import React, { useState } from "react"

import "./AddPerson.css"

const AddPerson = (props) => {
	const [person, setPerson] = useState({
		name: null,
		age: null,
	})

	const nameChangedHandler = (e) => {
		setPerson({ ...person, name: e.target.value })
	}

	const ageChangedHandler = (e) => {
		setPerson({ ...person, age: e.target.value })
	}

	return (
		<div className="AddPerson">
			<input onChange={nameChangedHandler} type="text" placeholder="Name" />
			<input onChange={ageChangedHandler} type="number" placeholdeor="Age" />
			<button onClick={props.personAdded}>Add Person</button>
			{person.name}
			{person.age}
		</div>
	)
}

export default AddPerson
