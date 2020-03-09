import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SearchForm from "./components/SearchForm";
import "./components/Todo.css";

const list = [
  {
    task: "Eat Lemon",
    id: 1,
    completed: false
  },
  {
    task: "Become Rich",
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list
    }
  }

  toggleCompleted = clickedItemId => {

    this.setState({
      list: this.state.list.map(item => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    });

  } // end toggleCompleted

  addTask = itemTask => {
    const newTask = {
      task: itemTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newTask]
    })
  } // end addTask

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(item => item.completed === false)
    })
  } // end clearCompleted

  filterSearch = query => {
    this.setState({
      list: this.state.list.filter(item => item.task.toLowerCase().includes(query.toLowerCase()))
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <h2>To do list</h2>
          <TodoForm addTask={this.addTask}/>
        </div>
        <SearchForm filterSearch={this.filterSearch}/>
        <TodoList list={this.state.list}
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
