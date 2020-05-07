// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import ToDo from "./Todo";

const ToDoList = props => {

    return (
        <div className="toDo-List">
        {props.list.map(task => (
            <ToDo
            toggleCompleted={props.toggleCompleted}
            key={task.id}
            item={task}
            />
        ))}
        </div>
        )
};

export default ToDoList;