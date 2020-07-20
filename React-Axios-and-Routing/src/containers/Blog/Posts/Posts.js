import React, { Component } from "react"
import "./Posts.module.css"
import axios from "../../../axios"
import Post from "../../../components/Post/Post"
import { Route } from "react-router-dom"
import FullPost from "../FullPost/FullPost"

class Posts extends Component {
	state = {
		posts: [],
	}

	// Fetching should be done in componentdidmount
	componentDidMount() {
		console.log(this.props)
		axios
			.get("/posts")
			.then((response) => {
				// Only get index 0 to 4 [4 posts]
				const posts = response.data.slice(0, 4)
				// Grab the posts and mutate it by adding an author field (smart)
				const updatedPosts = posts.map((post) => {
					return {
						...post,
						author: "Brainilio",
					}
				})
				this.setState({
					posts: updatedPosts,
				})
			})
			.catch((error) => {
				// console.log(error)
				// this.setState({ error: true })
			})
	}

	postSelectedHandler = (id) => {
		//navigating programmatically
		this.props.history.push("/posts/" + id)

		// this.props.history.push({ pathname: "/" + id })

		// this.setState({
		// 	selectedPostId: id,
		// })
	}

	render() {
		let posts = <p style={{ textAlign: "center" }}>Something went wrong...</p>
		if (!this.state.error) {
			posts = this.state.posts.map((post) => {
				return (
					// <Link key={post.id} to={"/" + post.id}>
					<Post
						key={post.id}
						title={post.title}
						author={post.author}
						clicked={() => this.postSelectedHandler(post.id)}
					/>
					// </Link>
				)
			})
		}
		return (
			<div>
				<section className="Posts">{posts}</section>
				<Route
					path={this.props.match.url + "/:id"}
					exact
					component={FullPost}
				/>
			</div>
		)
	}
}

export default Posts
