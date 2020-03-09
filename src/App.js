import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <h2>To do list</h2>
          <TodoForm/>
        </div>
        <TodoList list={this.state.list}/>
      </div>
    );
  }
}

export default App;
