import React from "react"

import IngredientForm from "./IngredientForm"
import IngredientList from "./IngredientList"
import Search from "./Search"

const Ingredients = (props) => {
	const [ingredients, setIngredients] = React.useState([])

	React.useEffect(() => {
		console.log("Rendering", ingredients)
	}, [ingredients])

	const filteredIngredientsHandler = React.useCallback((filterIg) => {
		setIngredients(filterIg)
	}, [])

	const addIngredientHandler = (ingredient) => {
		fetch("https://dummyproject-35081.firebaseio.com/ingredients.json", {
			method: "POST",
			body: JSON.stringify(ingredient),
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => {
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
		fetch(`https://dummyproject-35081.firebaseio.com/ingredients/${id}.json`, {
			method: "DELETE",
		}).then((response) => {
			setIngredients((prevIg) => prevIg.filter((ig) => ig.id !== id))
		})
	}

	return (
		<div className="App">
			<IngredientForm onAdd={addIngredientHandler} />

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
