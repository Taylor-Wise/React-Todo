import React from 'react';
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

const todos = [
  {
    task: "This is a task!",
    id: 1,
    completed: false
  },
  {
    task: "This is a completed task!",
    id: 2,
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
      todos: this.state.todos.map(task => {
        if (taskId === task.id) {
          return {
            ...task, 
            completed: !task.completed
            
          };
        }
        return task;
      })
    });
  }

  clearCompleted = () => {
    console.log("tw: app.js: ClearCompleted")
    this.setState({
      todos: this.state.todos.filter(task => {
        return !task.completed;
      })
      });
    }
  

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Create Your To Do List!</h1>
          <TodoForm 
          addNewTask={this.addNewTask}
          />
        </div>
        
        <ToDoList 
        list={this.state.todos} 
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
