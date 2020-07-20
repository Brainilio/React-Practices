import React, { Component } from "react"

class Course extends Component {
	state = {
		courseTitle: "",
	}

	componentDidMount() {
		this.parseQueryTitle()
	}

	componentDidUpdate() {
		this.parseQueryTitle()
	}

	parseQueryTitle() {
		const query = new URLSearchParams(this.props.location.search)
		for (let param of query.entries()) {
			if (this.state.courseTitle !== param[1]) {
				this.setState({ courseTitle: param[1] })
			}
		}
	}
	render() {
		return (
			<div>
				<h1>{this.state.courseTitle}</h1>
				<p>You selected a post with ID: {this.props.match.params.id}</p>
			</div>
		)
	}
}

export default Course
