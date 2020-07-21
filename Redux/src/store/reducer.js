//export reducer that i wanna use here

// js object that i wanna use as a initial state
const initialState = {
	counter: 0,
}

//fall back on initialstate
const reducer = (state = initialState, action) => {
	if (action.type === "INCREMENT") {
		return {
			...state,
			counter: state.counter + 1,
		}
	}
	return state
}

export default reducer
