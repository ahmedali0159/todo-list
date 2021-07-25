import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul 
    style={{backgroundColor: '#c8d6e5', 
    margin:'20px', 
    padding:'10px', 
    borderRadius:'10px', 
    boxShadow:'5px 5px 5px gray'}}>
      {todos.map(todo => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};