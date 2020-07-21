import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { createStore } from "redux"
import reducer from "./store/reducer"

//create redux store and callback the reducer.
const store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
