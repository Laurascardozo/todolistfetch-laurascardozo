import React from "react";
import TodoList from "./todolist";


//create your first component
const Home = () => {
	return (
		<div className="container">
			<div id="title" className="rounded">
				<h1>TODO LIST </h1>
			</div>
			<ul>
				<TodoList/>		
			</ul>

		</div>


	)
}
		

export default Home;