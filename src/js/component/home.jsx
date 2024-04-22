import React, { useEffect } from "react";
import TodoList from "./todolist";


//create your first component
const Home = () => {

	return (
		<div className="container">

			<ul>
				<TodoList />
			</ul>

		</div>


	)
}


export default Home;