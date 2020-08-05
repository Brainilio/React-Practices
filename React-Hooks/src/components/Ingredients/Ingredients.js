import React from "react"

import IngredientForm from "./IngredientForm"
import IngredientList from "./IngredientList"
import Search from "./Search"

const Ingredients = (props) => {
	const [ingredients, setIngredients] = React.useState([
		{
			id: 3,
			title: "Banana",
			amount: 3,
		},
		{
			id: 2,
			title: "Apples",
			amount: 3,
		},
		{
			id: 5,
			title: "Oranges",
			amount: 5,
		},
	])

	const addIngredientHandler = (ingredient) => {
		fetch("https://dummyproject-35081.firebaseio.com/ingredients.json", {
			method: "POST",
			body: JSON.stringify(ingredient),
		})

		setIngredients((prevIngredients) => [
			...prevIngredients,
			{
				id: Math.random().toString(),
				...ingredient,
			},
		])
	}

	const removeIngredientHandler = (id) => {
		let oldIngredients = [...ingredients]
		oldIngredients.map((ig) => {
			if (ig.id === id) {
				let ingredientIndex = oldIngredients.indexOf(ig)
				return oldIngredients.splice(ingredientIndex, 1)
			}
		})
		setIngredients([...oldIngredients])
	}

	return (
		<div className="App">
			<IngredientForm onAdd={addIngredientHandler} />

			<section>
				<Search />
				<IngredientList
					onRemoveItem={removeIngredientHandler}
					ingredients={ingredients}
				/>
			</section>
		</div>
	)
}

export default Ingredients
