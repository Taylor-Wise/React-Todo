import React from "react";
import "./Todo.css";


const ToDo = (props) => {

    const handleClick = e => {
        props.toggleCompleted(props.item.id)
    }
    console.log("props", props);

    return(
        <div >
            <div onClick={handleClick}
            className={`task${props.item.completed ? " completed" : ""}`}>
                <p>{props.item.task}</p>
            </div>
        </div>
    )

};

export default ToDo;