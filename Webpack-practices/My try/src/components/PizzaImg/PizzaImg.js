import React from "react"
import classes from "./PizzaImg."
import Pizza from "../../assets/pizza.jpg"

const PizzaImg = () => {
	return (
		<div className={classes.PizzaImg}>
			<img src={Pizza} alt="This is a pizza" />
		</div>
	)
}

export default PizzaImg
