import React, {useState} from "react";


const TodoList = () => {
    const [inputValue, setInputValue]  = useState ("");
    const [todos, setTodos] = useState([]);  
    const [hoverItem, setHoverItem] = useState (null)

    const handleChange = (event) => {
        setInputValue(event.target.value);
      }

    return (
        <div>
            <input 
             id="todo-list"
             type="text"
             value={inputValue} 
             onChange={handleChange}
             onKeyDown= {(e) =>{
                if(e.key === 'Enter'){ 
                 setTodos(todos.concat(inputValue));
                 setInputValue("");
                 }
             }
             }>
            </input>
            <>
            {todos.length === 0 && "No things to do, add task"}
            </>
            
            {todos.map((item,index) => (
				<div 
                key={index}
                onMouseEnter={()=> setHoverItem(index)}
                onMouseLeave={()=> setHoverItem(null)}
                >

                <i className="fa-regular fa-square-check"></i>
 
                <span> {item}{""} </span> 

                {hoverItem === index && <i className="fa-solid fa-trash p-20"
                        onClick={()=>
                            setTodos(todos.filter(
                                (todos, currentIndex) =>
                                    index!= currentIndex 
                                        ))
                                }
                    ></i>}
                
				</div>
			))}
            <div> {todos.length} tasks</div>
        </div>  
    );
}





export default TodoList;