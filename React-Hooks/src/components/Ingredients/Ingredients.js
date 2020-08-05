import React from "react"

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

const Ingredients = (props) => {
	const [ingredients, dispatch] = React.useReducer(ingredientReducer, [])
	const [isLoading, setIsloading] = React.useState(false)
	const [error, setError] = React.useState()

	React.useEffect(() => {
		console.log("Rendering", ingredients)
	}, [ingredients])

	const filteredIngredientsHandler = React.useCallback((filterIg) => {
		// setIngredients(filterIg)
		dispatch({
			type: "SET",
			ingredients: filterIg,
		})
	}, [])

	const addIngredientHandler = (ingredient) => {
		setIsloading(true)
		fetch("https://dummyproject-35081.firebaseio.com/ingredients.json", {
			method: "POST",
			body: JSON.stringify(ingredient),
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => {
				setIsloading(false)
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
	}

	const removeIngredientHandler = (id) => {
		setIsloading(true)
		fetch(`https://dummyproject-35081.firebaseio.com/ingredients/${id}.json`, {
			method: "DELETE",
		})
			.then(() => {
				setIsloading(false)
				dispatch({
					type: "DELETE",
					id: id,
				})
			})
			.catch((error) => {
				setError("Something went wrong!")
				setIsloading(false)
			})
	}

	return (
		<div className="App">
			{error && (
				<ErrorModal
					onClose={() => {
						setError(null)
					}}
				>
					{error}
				</ErrorModal>
			)}

			<IngredientForm onAdd={addIngredientHandler} loading={isLoading} />
			<section>
				<Search onLoadIngredients={filteredIngredientsHandler} />
				<IngredientList
					onRemoveItem={removeIngredientHandler}
					ingredients={ingredients}
				/>
			</section>
		</div>
	)
}

export default Ingredients
