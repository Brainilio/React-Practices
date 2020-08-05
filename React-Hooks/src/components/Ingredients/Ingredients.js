import React, { useMemo } from "react"
import IngredientForm from "./IngredientForm"
import IngredientList from "./IngredientList"
import ErrorModal from "../UI/ErrorModal"
import Search from "./Search"

const ingredientReducer = (currentIngs, action) => {
	switch (action.type) {
		case "SET":
			return action.ingredients
		case "ADD":
			return [...currentIngs, action.newIngredient]
		case "DELETE":
			return currentIngs.filter((ing) => ing.id !== action.id)
		default:
			throw new Error("Should not get there!")
	}
}

const HttpReducer = (currentState, action) => {
	switch (action.type) {
		case "START":
			return { loading: true, error: null }
		case "SUCCESS":
			return { ...currentState, loading: false }
		case "FAILED":
			return { loading: false, error: action.error }
		case "CLEAR":
			return { ...currentState, error: null }
		default:
			throw new Error("Should not get there!")
	}
}

const Ingredients = () => {
	const [ingredients, dispatch] = React.useReducer(ingredientReducer, [])
	const [httpstate, httpdispatch] = React.useReducer(HttpReducer, {
		loading: false,
		error: null,
	})
	// const [isLoading, setIsloading] = React.useState(false)
	// const [error, setError] = React.useState()

	console.log("Rendering..")
	React.useEffect(() => {
		console.log("Rendering INGREDIENTS", ingredients)
	}, [ingredients])

	const filteredIngredientsHandler = React.useCallback((filterIg) => {
		// setIngredients(filterIg)
		dispatch({
			type: "SET",
			ingredients: filterIg,
		})
	}, [])

	const addIngredientHandler = React.useCallback((ingredient) => {
		httpdispatch({ type: "START" })
		fetch("https://dummyproject-35081.firebaseio.com/ingredients.json", {
			method: "POST",
			body: JSON.stringify(ingredient),
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => {
				httpdispatch({ type: "SUCCESS" })
				return response.json()
			})
			.then((resData) => {
				dispatch({
					type: "ADD",
					newIngredient: {
						id: resData.name,
						...ingredient,
					},
				})
			})
	}, [])

	const removeIngredientHandler = React.useCallback((id) => {
		httpdispatch({ type: "START" })
		fetch(`https://dummyproject-35081.firebaseio.com/ingredients/${id}.json`, {
			method: "DELETE",
		})
			.then(() => {
				httpdispatch({ type: "SUCCESS" })
				dispatch({
					type: "DELETE",
					id: id,
				})
			})
			.catch((error) => {
				httpdispatch({ type: "FAILED", error: "Something went wrong!" })
			})
	}, [])

	const clearError = React.useCallback(() => {
		httpdispatch({ type: "CLEAR" })
	}, [])

	const ingredientList = useMemo(() => {
		return (
			<IngredientList
				onRemoveItem={removeIngredientHandler}
				ingredients={ingredients}
			/>
		)
	}, [ingredients, removeIngredientHandler])

	return (
		<div className="App">
			{httpstate.error && (
				<ErrorModal onClose={clearError}>{httpstate.error}</ErrorModal>
			)}

			<IngredientForm
				onAdd={addIngredientHandler}
				loading={httpstate.loading}
			/>
			<section>
				<Search onLoadIngredients={filteredIngredientsHandler} />
				{ingredientList}
			</section>
		</div>
	)
}

export default Ingredients
