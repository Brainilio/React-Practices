import * as actionTypes from "./actions"

// js object that i wanna use as a initial state
const initialState = {
	counter: 0,
	results: [],
}

//fall back on initialstate
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			//make new object out of state
			const newState = Object.assign({}, state)
			newState.counter = state.counter + 1
			return newState
		case actionTypes.DECREMENT:
			return { ...state, counter: state.counter - 1 }
		case actionTypes.ADD:
			return { ...state, counter: state.counter + action.value }
		case actionTypes.SUB:
			return { ...state, counter: state.counter - action.value }
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({ id: new Date(), value: state.counter }),
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

export default reducer
