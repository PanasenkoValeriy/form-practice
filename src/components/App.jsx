import { Component } from "react"
import { TodoList } from "./TodoList/TodoList" ;
import initialTodos from "../todo.json";

export class App extends Component  {
state={
    todos: initialTodos,
    filter: '',
  }

  render() {
    return (
     
    <div>
 < TodoList todos={initialTodos}/> 
    </div>
  );
 } 
};
