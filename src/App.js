import React from 'react';
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

const todos = [
  {
    task: "This is a task!",
    id: Date.now(),
    completed: false
  },
  {
    task: "This is a completed task!",
    id: Date.now(),
    completed: true
  }
];




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todos
    };
  };

  addNewTask = taskName => {
    this.setState({
      todos: [
        ...this.state.todos,
      {task: taskName, completed: false, id: Date.now()}
    ]
    });
  };

  toggleCompleted = taskId => {
    console.log("tw Toggle", taskId);
    this.setState({
      todos: this.state.todos.map(listItem => {
        if (taskId === listItem.id) {
          return {
            ...listItem, 
            completed: !listItem.completed
          };
        }
        return listItem;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTask={this.addNewTask}/>
        <ToDoList 
        list={this.state.todos} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
