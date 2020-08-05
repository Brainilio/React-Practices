import React, { useState } from "react"

import Card from "../UI/Card"
import LoadingIndicator from "../UI/LoadingIndicator"
import "./IngredientForm.css"

const IngredientForm = React.memo((props) => {
	console.log("Rendering ingredient form")
	const [form, setForm] = useState({
		title: "",
		amount: "",
	})

	const submitHandler = (event) => {
		event.preventDefault()
		props.onAdd(form)
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
							onChange={(e) => {
								const newTitle = e.target.value
								setForm((prevState) => ({
									...prevState,
									title: newTitle,
								}))
							}}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="amount">Amount</label>
						<input
							type="number"
							id="amount"
							value={form.amount}
							onChange={(e) => {
								const newAmount = e.target.value
								setForm((prevState) => ({
									...prevState,
									amount: newAmount,
								}))
							}}
						/>
					</div>
					<div className="ingredient-form__actions">
						<button type="submit">Add Ingredient</button>
						{props.loading && <LoadingIndicator />}
					</div>
				</form>
			</Card>
		</section>
	)
})

export default IngredientForm
