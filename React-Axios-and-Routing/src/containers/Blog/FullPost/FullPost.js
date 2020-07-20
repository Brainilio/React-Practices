import React, { Component } from "react"
import axios from "axios"

import "./FullPost.css"

class FullPost extends Component {
	//LOADED POSTS in state
	state = {
		loadedPost: null,
	}

	//only get if you update this componenent AKA get a id in
	componentDidMount() {
		console.log(this.props)
		this.loadData()
	}

	componentDidUpdate() {
		this.loadData()
	}

	loadData() {
		if (this.props.match.params.id) {
			//make request if we have no loaded post, or if this state.id is not the same as the post.id
			if (
				!this.state.loadedPost ||
				(this.state.loadedPost &&
					this.state.loadedPost.id !== +this.props.match.params.id)
			) {
				axios
					.get(`/posts/${this.props.match.params.id}`)
					.then((response) => this.setState({ loadedPost: response.data }))
			}
		}
	}

	deletePostHandler = (id) => {
		axios.delete("/posts/" + this.props.match.params.id).then((response) => {
			console.log(response)
		})
	}

	render() {
		let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>

		//IF PROPS.ID is not, display a loader else display ^
		if (this.props.match.params.id) {
			post = <p style={{ textAlign: "center" }}>Loading...</p>
		}

		//if loadedpost contains content then display it
		if (this.state.loadedPost) {
			post = (
				<div className="FullPost">
					<h1>{this.state.loadedPost.title}</h1>
					<p>{this.state.loadedPost.body}</p>
					<div className="Edit">
						<button onClick={this.deletePostHandler} className="Delete">
							Delete
						</button>
					</div>
				</div>
			)
		}
		return post
	}
}

export default FullPost
