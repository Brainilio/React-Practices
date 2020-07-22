//export reducer that i wanna use here

// js object that i wanna use as a initial state
const initialState = {
	counter: 0,
}

//fall back on initialstate
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, counter: state.counter + 1 }
		case "DECREMENT":
			return { ...state, counter: state.counter - 1 }
		case "ADD":
			return { ...state, counter: state.counter + action.value }
		case "SUB":
			return { ...state, counter: state.counter - action.value }
		default:
			return state
	}
}

export default reducer
