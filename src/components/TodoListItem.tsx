import React from 'react';

interface Todo {
    text: string;
    complete: boolean;
}

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {
    return (
        <div>
            
            <li>
                <label style={{textDecoration: todo.complete ? "line-through" : undefined}}>
                    <input onClick={() => {
                        toggleTodo(todo)
                    }} type="checkbox" checked={todo.complete} /> {' '} {todo.text}
                </label>
            </li>
        </div>
    );
};

