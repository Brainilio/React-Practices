import * as actionTypes from "./action"

// js object that i wanna use as a initial state
const initialState = {
	persons: [],
}

//fall back on initialstate
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PERSON:
			let newPersonArray = [...state.persons]
			let updatedPersonArray = newPersonArray.concat({
				id: new Date(),
				name: action.name,
				age: action.age,
			})
			return {
				...state,
				persons: updatedPersonArray,
			}
		case actionTypes.DELETE_PERSON:
			return { ...state }

		default:
			return state
	}
}

export default reducer
