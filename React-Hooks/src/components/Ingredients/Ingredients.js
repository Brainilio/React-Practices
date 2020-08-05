import React from "react"

import IngredientForm from "./IngredientForm"
import IngredientList from "./IngredientList"
import Search from "./Search"
import { useState } from "react"

const Ingredients = (props) => {
	const [ingredients, setIngredients] = React.useState([])

	return (
		<div className="App">
			<IngredientForm />

			<section>
				<Search />
				<IngredientList ingredients={ingredients} />
			</section>
		</div>
	)
}

export default Ingredients
