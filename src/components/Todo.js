import React from "react";
import ToDoList from "./TodoList";
import "./Todo.css";


const ToDo = (props) => {

    const handleClick = e => {
        props.toggleCompleted(props.item.id)
    }

    return(
        <div onClick={handleClick}
        className={`item${props.item.completed} ? " completed" : ""}`}>
            <p>{props.item.task}</p>
        </div>
    )

};

export default ToDo;