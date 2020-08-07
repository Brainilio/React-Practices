//managing state globally just using react & js

import { useState, useEffect } from "react"

let globalState = {}
let listeners = []
let actions = {}

// custom hook for managing listeners and accessing data globally
export const useStore = () => {
	/*
     it will be created once, when this file is first imported, and 
     every other file will use the same state 
      you're sharing data with all files that are using it, you can share logic and data, 
      by managing data outside of the hook
     */

	const setState = useState(globalState)[1] //updating function only

	//catch action identifier
	const dispatch = (actionType, payload) => {
		//actions should have a key actiontype and value should be a function
		const newState = actions[actionType](globalState)
		globalState = { ...globalState, ...newState }

		for (const listener of listeners) {
			//updates react state where listener comes from with the new global state, and react
			// will re-render component
			listener(globalState)
		}
	}

	useEffect(() => {
		//point fucntion to listener, listener will grow overtime the more listeners we add
		listeners.push(setState)

		return () => {
			//unmount listener that got caught in setstate
			listeners = listeners.filter((li) => li !== setState)
		}
	}, [setState])

	//return globalstate and dispatch
	return [globalState, dispatch]
}

export const initStore = (userActions, initialState) => {
	if (initialState) {
		globalState = { ...globalState, ...initialState }
	}
	actions = { ...actions, ...userActions }
}
