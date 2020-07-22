import * as actionTypes from "./action"

// js object that i wanna use as a initial state
const initialState = {
	persons: [],
}

//fall back on initialstate
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PERSON:
			const newPersonArray = [...state.persons]
			let updatedPersonArray = newPersonArray.concat({
				id: action.id,
				name: action.name,
				age: action.age,
			})
			return {
				...state,
				persons: updatedPersonArray,
			}
		case actionTypes.DELETE_PERSON:
			const personArray = [...state.persons]
			let removedPersonFromArray = personArray.filter(
				(person) => person.id !== action.id
			)
			return { ...state, persons: removedPersonFromArray }

		default:
			return state
	}
}

export default reducer
