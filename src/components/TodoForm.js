import React from "react";


class TodoForm extends React.Component {


    constructor() {
        super();
        this.state = {
            newTask: ""
        };
    };

    handleChange = e => {
        e.preventDefault();
        this.setState({
            newTask: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTask(this.state.newTask);
        this.setState({
            newTask: ""
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="task"
                value={this.state.newTask}
                onChange={this.handleChange}
                />
                <button>Add Task</button>

                <button>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;