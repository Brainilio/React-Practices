import React, { Component } from "react"
import { Route, NavLink, Switch, Redirect } from "react-router-dom"
import "./Blog.css"
import Posts from "./Posts/Posts"
// import NewPost from "./NewPost/NewPost"
import asyncComponent from "../../HOC/asyncComponent"

//IMPORT ONLY IF NEEDED => PASS FUNCTION // lazy loading
const AsyncNewPost = asyncComponent(() => {
	//dynamic import syntax, whatever comes in the params is only imported when function is executed.
	//functionw ill only be executed when rendered asyncnewpost
	return import("./NewPost/NewPost")
})

// absolute path: '/path'
// relative path: this.props.match.url + '/path'

class Blog extends Component {
	state = {
		auth: true,
	}
	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								{/* You can also say "activeClassName="active-class" to have a different active class */}
								{/* You can also just say activestyle={{textAlign: 'center'}} for example */}
								<NavLink exact to="/Posts">
									Posts
								</NavLink>
							</li>
							<li>
								<NavLink
									to={{
										pathname: "/new-post",
									}}
								>
									New Post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>

				<Switch>
					{/* Exact is needed bc u only wanna render this when path is / */}
					{/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
					{/* I want to show the component on this path */}
					{this.state.auth ? (
						<Route path="/new-post" component={AsyncNewPost} />
					) : null}
					<Route path="/posts" component={Posts} />
					<Route render={() => <h1>NOT FOUND</h1>} />
					{/* <Redirect from="/" to="/posts" /> */}
					{/* <Route path="/" component={Posts} /> */}
				</Switch>
			</div>
		)
	}
}

export default Blog
