import React, { useState } from "react"

import Card from "../UI/Card"
import "./IngredientForm.css"

const IngredientForm = React.memo((props) => {
	const [form, setForm] = useState({
		name: "",
		amount: "",
	})

	const submitHandler = (event) => {
		event.preventDefault()
		// ...
	}

	return (
		<section className="ingredient-form">
			<Card>
				<form onSubmit={submitHandler}>
					<div className="form-control">
						<label htmlFor="title">Name</label>
						<input
							type="text"
							id="title"
							value={form.name}
							onChange={(e) => setForm({ ...form, name: e.target.value })}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="amount">Amount</label>
						<input
							type="number"
							id="amount"
							value={form.amount}
							onChange={(e) => setForm({ ...form, amount: e.target.value })}
						/>
					</div>
					<div className="ingredient-form__actions">
						<button type="submit">Add Ingredient</button>
					</div>
				</form>
			</Card>
		</section>
	)
})

export default IngredientForm
