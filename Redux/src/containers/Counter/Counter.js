import React, { Component } from "react"
import { connect } from "react-redux"

import CounterControl from "../../components/CounterControl/CounterControl"
import CounterOutput from "../../components/CounterOutput/CounterOutput"

class Counter extends Component {
	render() {
		return (
			<div>
				{/* properties received from the subscription */}
				<CounterOutput value={this.props.counter} />
				<CounterControl
					label="Increment"
					clicked={this.props.onIncrementCounter}
				/>
				<CounterControl
					label="Decrement"
					clicked={this.props.onDecrementCounter}
				/>
				<CounterControl
					label="Add 5"
					clicked={() => this.props.onAddCounter(5)}
				/>
				<CounterControl
					label="Subtract 5"
					clicked={() => this.props.onSubCounter(5)}
				/>
				<button onClick={this.props.onStoreResult}>Store result</button>
				<ul>
					{this.props.storedResults.map((result) => (
						<li
							key={result.id}
							onClick={() => this.props.onDeleteResult(result.id)}
						>
							{result.value} is the current value.
						</li>
					))}
				</ul>
			</div>
		)
	}
}

//before export => references the state from the reducer, so you can use it. (this is the state)
const mapStateToProps = (state) => {
	return {
		counter: state.counter,
		storedResults: state.results,
	}
}

// dispatch, this is what will go to your reducer (these are the methods that will target the state)
const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
		onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
		onAddCounter: (value) => dispatch({ type: "ADD", value: value }),
		onSubCounter: (value) => dispatch({ type: "SUB", value: value }),
		onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
		onDeleteResult: (id) => dispatch({ type: "DELETE_RESULT", resultId: id }),
	}
}

//hoc connect, pass these functions to Counter
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
