import React from "react"

import Card from "../UI/Card"
import "./Search.css"

const Search = React.memo((props) => {
	//destructure props
	const { onLoadIngredients } = props
	const [enteredFilter, setEnteredFilter] = React.useState("")
	const inputRef = React.useRef()
	// only fires when enteredfilter changes.
	React.useEffect(() => {
		const timer = setTimeout(() => {
			if (enteredFilter === inputRef.current.value) {
				//query string
				const query =
					enteredFilter.length === 0
						? ""
						: `?orderBy="title"&equalTo="${enteredFilter}"`
				fetch(
					"https://dummyproject-35081.firebaseio.com/ingredients.json" + query
				)
					.then((response) => response.json())
					.then((data) => {
						const loadedIngredients = []
						for (const key in data) {
							loadedIngredients.push({
								id: key,
								title: data[key].title,
								amount: data[key].amount,
							})
						}
						onLoadIngredients(loadedIngredients)
					})
			}
		}, 500)
		return () => {
			//will run the old timer before it sets a new one, ensures that we will have 1 ongoing timer
			clearTimeout(timer)
		}
	}, [enteredFilter, onLoadIngredients, inputRef])

	return (
		<section className="search">
			<Card>
				<div className="search-input">
					<label>Filter by Title</label>
					<input
						ref={inputRef}
						type="text"
						onChange={(e) => setEnteredFilter(e.target.value)}
					/>
				</div>
			</Card>
		</section>
	)
})

export default Search
