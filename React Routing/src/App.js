import React, { Component } from "react"
import { Switch, Route, NavLink, Redirect } from "react-router-dom"
import Courses from "./containers/Courses/Courses"
import Users from "./containers/Users/Users"
import Course from "./containers/Course/Course"

class App extends Component {
	render() {
		return (
			<div>
				<header>
					<nav>
						<ul
							style={{
								textAlign: "center",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<li>
								<NavLink exact to="/users">
									Users
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/posts">
									Posts
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>

				<Switch>
					<Route path="/" exact render={() => <h1>Home</h1>} />
					<Route path="/users" component={Users} />
					<Route path="/posts" component={Courses} />
					<Redirect from="/all-posts" to="/posts" />
					{/* <Route path="/courses/:id" component={Course} /> */}
					<Route render={() => <h1>NOT FOUND</h1>} />
				</Switch>
			</div>
		)
	}
}

export default App
