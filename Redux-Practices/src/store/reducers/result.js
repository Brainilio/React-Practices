import * as actionTypes from "../actions/actionTypes"

// js object that i wanna use as a initial state
const initialState = {
	results: [],
}

//fall back on initialstate
const results_reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({ id: new Date(), value: action.result }),
			}
		case actionTypes.DELETE_RESULT:
			// # option 1:
			// const id = 2;
			// const newArray = [...state.results]
			// newArray.splice(id, 1)

			// # option 2:
			const updatedArray = state.results.filter(
				(result, index) => result.id !== action.resultId
			)
			return {
				...state,
				results: updatedArray,
			}
		default:
			return state
	}
}

export default results_reducer
