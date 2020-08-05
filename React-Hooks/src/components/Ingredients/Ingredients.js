import React from "react"

import IngredientForm from "./IngredientForm"
import IngredientList from "./IngredientList"
import ErrorModal from "../UI/ErrorModal"
import Search from "./Search"

const Ingredients = (props) => {
	const [ingredients, setIngredients] = React.useState([])
	const [isLoading, setIsloading] = React.useState(false)
	const [error, setError] = React.useState()

	React.useEffect(() => {
		console.log("Rendering", ingredients)
	}, [ingredients])

	const filteredIngredientsHandler = React.useCallback((filterIg) => {
		setIngredients(filterIg)
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
				setIngredients((prevIngredients) => [
					...prevIngredients,
					{
						id: resData.name,
						...ingredient,
					},
				])
			})
	}

	const removeIngredientHandler = (id) => {
		setIsloading(true)
		fetch(`https://dummyproject-35081.firebaseio.com/ingredients/${id}.json`, {
			method: "DELETE",
		})
			.then((response) => {
				setIsloading(false)
				setIngredients((prevIg) => prevIg.filter((ig) => ig.id !== id))
			})
			.catch((error) => {
				setError("Something went wrong!")
			})
	}

	return (
		<div className="App">
			{error && (
				<ErrorModal
					onClose={() => {
						setError(null)
						setIsloading(false)
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
