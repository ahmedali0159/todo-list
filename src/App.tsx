import React from 'react';
import { useState } from 'react';
import { TodoList } from './components/TodoList'


const initialTodos: Todo[] = [
  {
    text: 'Walk the dragon',
    complete: false,
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
  return (
    <div style={{textAlign: 'center'}}>
       <h1>Todo List</h1>
       <TodoList todos={todos} toggleTodo={toggleTodo} />;
      </div>
  );
}

export default App;
