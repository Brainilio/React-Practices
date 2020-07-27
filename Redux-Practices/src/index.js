import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import counterReducer from "./store/reducers/counter"
import resultReducer from "./store/reducers/result"

//MERGE REDUCERS
const rootReducer = combineReducers({
	ctr: counterReducer,
	res: resultReducer,
})

//log store and middleware
const logger = (store) => {
	return (next) => {
		return (action) => {
			console.log("[MIDDLEWARE] Dispatching", action)
			//let action pass to reducer
			const result = next(action)
			console.log("[MIDDLEWARE] next state", store.getState())
			return result
		}
	}
}

//create redux store and callback the reducer + middleware
const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
registerServiceWorker()
