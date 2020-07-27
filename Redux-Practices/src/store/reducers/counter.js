import * as actionTypes from "../actions/actionTypes"
import { updateObject } from "../utility"

// js object that i wanna use as a initial state
const initialState = {
	counter: 0,
}

//fall back on initialstate
const counter_reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			//make new object out of state
			const newState = Object.assign({}, state)
			newState.counter = state.counter + 1
			return { ...state, counter: state.counter + 1 }
		case actionTypes.DECREMENT:
			return { ...state, counter: state.counter - 1 }
		case actionTypes.ADD:
			return updateObject(state, { counter: state.counter + action.value })
		case actionTypes.SUB:
			return updateObject(state, { counter: state.counter - action.value })
		default:
			return state
	}
}

export default counter_reducer
