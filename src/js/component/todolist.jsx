import React, { useState, useEffect } from "react";

const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const apiUrl = 'https://playground.4geeks.com/todo'
    const [user, setUser] = useState('laurascardozo')

    async function getTodos() {
        const response = await fetch(`${apiUrl}/users/${user}`)
        console.log(response)
        const data = await response.json()
        if (response.ok) {
            console.log(data)
            setTodos(data.todos)
            return true
        }
        console.log(data)
        setTodos(false)
        return false
    }
    async function createUser() {
        const response = await fetch(`${apiUrl}/users/${user}`, { method: 'POST' })
        console.log(response)
        const data = await response.json()
        if (response.ok) {
            console.log(data)
            return true
        }
        console.log(data)
        return false
    }
    async function createTodo(todo) {
        const response = await fetch(`${apiUrl}/todos/${user}`, {
            method: 'POST',
            body: JSON.stringify({
                "label": todo,
                "is_done": false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        const data = await response.json()
        if (response.ok) {
            console.log(data)
            setInputValue('')
            getTodos()
            return true
        }
        console.log(data)
        return false
    }
    async function deleteTodo(id) {
        const response = await fetch(`${apiUrl}/todos/${id}`, { method: 'DELETE' })
        console.log(response)
        const data = response
        if (response.ok) {
            console.log(data)
            getTodos()
            return true
        }
        console.log(data)
        return false
    }

    useEffect(() => {
        createUser()
        getTodos()

    }, [])



    return (
        <div>
            <div className="title rounded">
                <h1>TODO LIST </h1>
            </div>
            <div className="todo-list rounded">
                <div className="form">
                    <input
                        className="text"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                createTodo(inputValue);
                            };
                        }
                        }
                    />
                    <>
                        {
                            todos.length <= 0 ?
                                (<p>No tasks, add a task</p>) :
                                (
                                    <div>
                                        {
                                            todos.map((todos, index) => {
                                                if (index >= 0) {
                                                    return (
                                                        <div className="list" key={todos.id} style={{ padding: '5px' }}>
                                                            <div>
                                                                <i className="fa-regular fa-square-check"></i>
                                                                <span className="p-2">{todos.label}</span>
                                                            </div>
                                                            <div>
                                                                <i class="fa-solid fa-x" onClick={() => deleteTodo(todos.id)}
                                                                ></i>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                )
                        }
                    </>

                </div>
            </div>
            <div className="foot rounded">

                <div>{todos.length} tasks</div>
            </div>


        </div>
    );
};






export default TodoList;