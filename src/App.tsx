import React from 'react';
import { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList'


const initialTodos: Todo[] = [
  {
    text: 'Walk the dragon',
    complete: false,
  },
  {
    text: 'Do homework',
    complete: false,
  },
  {
    text: 'Please Come here',
    complete: true,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo;
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = (text: string) => {
    const newAddTodo = {text, complete:false}
    setTodos([...todos, newAddTodo])
  }
  return (
    <div style={{textAlign: 'center'}}>
       <h1>Todo List</h1>
       <TodoList todos={todos} toggleTodo={toggleTodo} />;
       <AddTodoForm addTodo={addTodo}/>
      </div>
  );
}

export default App;
