import React, { useState } from 'react';

interface Props {
    addTodo: AddTodo
}

export const AddTodoForm: React.FC<Props> = ({addTodo}) => {
    const [text, setText] = useState('')
    return (
        <div>
            <form>
                <input placeholder='Add Your Text' style={{padding:'10px', 
                borderRadius:'10px',
                border:'2px solid #0abde3'
               }} 
                type="text" value={text} onChange={e => {
                    setText(e.target.value)
                }} />
                <button style={{padding: '10px', 
                borderRadius:'10px', 
                backgroundColor:'#0abde3', 
                border:'2px solid #0abde3', 
                margin:'5px'
               }} 
                onClick={e => {
                    e.preventDefault()
                    addTodo(text)
                    setText('')
                }} type='submit'>Add</button>
            </form>
        </div>
    );
};