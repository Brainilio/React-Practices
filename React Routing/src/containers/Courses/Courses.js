import React, { Component } from "react"
import { Route, Link } from "react-router-dom"
import Course from "../Course/Course"
import "./Courses.css"

class Courses extends Component {
	state = {
		courses: [
			{ id: 1, title: "My first day as a developer" },
			{ id: 2, title: "My second day as a developer" },
			{ id: 3, title: "My third day as a developer" },
		],
		loadedPost: null,
	}

	// cardClickHandler = (id) => {
	// 	// this.props.history.push("/courses/" + id)

	// 	this.setState({
	// 		loadedPost: id,
	// 	})
	// }

	render() {
		// let post = <h1>Please select a post</h1>

		// if (this.state.loadedPost) {
		// 	this.state.courses.map((course) => {
		// 		return (post = (
		// 			<Course id={this.state.loadedPost} title={course.title} />
		// 		))
		// 	})
		// }

		return (
			<div>
				<h1>My Developer Blog</h1>
				<section className="Courses">
					{this.state.courses.map((course) => {
						return (
							<Link
								key={course.id}
								to={{
									pathname: this.props.match.url + "/" + course.id,
									search: "?title=" + course.title,
								}}
							>
								<article
									// onClick={() => this.cardClickHandler(course.id)}
									className="Course"
								>
									{course.title}
								</article>
							</Link>
						)
					})}
				</section>
				<Route path={this.props.match.url + "/:id"} exact component={Course} />
				{/* // {post} */}
			</div>
		)
	}
}

export default Courses
