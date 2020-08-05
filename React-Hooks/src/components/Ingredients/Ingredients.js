import React from "react"

import IngredientForm from "./IngredientForm"
import IngredientList from "./IngredientList"
import Search from "./Search"

const Ingredients = (props) => {
	const [ingredients, setIngredients] = React.useState([])

	const addIngredientHandler = (ingredient) => {
		setIngredients((prevIngredients) => [
			...prevIngredients,
			{
				id: Math.random().toString(),
				...ingredient,
			},
		])
	}
	return (
		<div className="App">
			<IngredientForm onAdd={addIngredientHandler} />

			<section>
				<Search />
				<IngredientList onRemoveItem={() => {}} ingredients={ingredients} />
			</section>
		</div>
	)
}

export default Ingredients
