import React from "react"
import { BrowserRouter } from "react-router-dom"

import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import axios from "axios"

//SET UP GLOBAL CONFIGURATIONS.
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"
// set your headers
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN"
//set your post headers
axios.defaults.headers.post["Content-Type"] = "application/json"

//add interceptors to see what has been sent
axios.interceptors.request.use(
	(request) => {
		console.log(request)
		// you can config your requests here.
		return request
	},
	(error) => {
		console.log(error)
		//also reject the error
		return Promise.reject(error)
	}
)

//check responses and log it
axios.interceptors.response.use(
	(response) => {
		console.log(response)
		// you can config your requests here.
		return response
	},
	(error) => {
		console.log(error)
		return Promise.reject(error)
	}
)

// SET base url
ReactDOM.render(
	<BrowserRouter basename="/">
		<App />
	</BrowserRouter>,
	document.getElementById("root")
)
registerServiceWorker()
