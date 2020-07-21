const redux = require("redux")
// creates new redux store
const createStore = redux.createStore

// initial state
const initialState = {
	counter: 0,
}

// ### Reducer => Strongly connected to store, it's the only thing that may update the state
//Gets the old state, that it may update & action, if receives nothing; will make initialstate the default
const ROOT_REDUCER = (state = initialState, action) => {
	//function needs to return the updated state.
	//if action.type === inc_counter => return immutable state, copied state with the counter +1
	if (action.type === "INC_COUNTER") {
		return {
			...state,
			counter: state.counter + 1,
		}
	}
	//for add counter function
	if (action.type === "ADD_COUNTER") {
		return {
			...state,
			counter: state.counter + action.value,
		}
	}
	return state
}

// ### Store => CREATE STORE
// Won't do much, needs to be initialized with reduce in mind;
const store = createStore(ROOT_REDUCER)

// ### ACTION
//Dispatching Action: convention should be all uppercase and be descriptive in your actions
store.dispatch({ type: "INC_COUNTER" }) //
store.dispatch({ type: "ADD_COUNTER", value: 10 }) //increase counter by 10

// store.
console.log(store.getState())

//Subscription
