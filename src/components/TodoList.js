import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            {props.list.map(item => (
                <Todo 
                key = {item.id}
                item={item}
                toggleCompleted={props.toggleCompleted}/>
            ))}

            <button 
            onClick={props.clearCompleted}>
            Clear Completed Tasks
            </button>
        </div>
    )
}

export default TodoList;
