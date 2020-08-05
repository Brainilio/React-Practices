import { useReducer, useCallback } from "react"

const HttpReducer = (currentState, action) => {
	switch (action.type) {
		case "START":
			return { loading: true, error: null, data: null }
		case "SUCCESS":
			return { ...currentState, loading: false, data: action.responseData }
		case "FAILED":
			return { loading: false, error: action.error }
		case "CLEAR":
			return { ...currentState, error: null }
		default:
			throw new Error("Should not get there!")
	}
}

//custom hook
const useHttp = () => {
	const [httpstate, httpdispatch] = useReducer(HttpReducer, {
		loading: false,
		error: null,
		data: null,
	})

	const sendRequest =  useCallback((url, method, body) => {
		httpdispatch({ type: "START" })
		fetch(url, {
			method: method,
			body: body,
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				return response.json()
			})
			.then((responseData) => {
				httpdispatch({ type: "SUCCESS", responseData: responseData })
			})
			.catch((error) => {
				httpdispatch({ type: "FAILED", error: "Something went wrong!" })
			})
	}, [])

	return {
		isLoading: httpstate.loading,
		data: httpstate.data,
          error: httpstate.error,
          sendRequest: sendRequest
	}
}

export default useHttp
