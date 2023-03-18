import React from 'react';
import Todo from './Todo';


const TodoList = ({ items, handleClick, handleDelete }) => {
    return (
        <ul>
            {
                items.map((item) => (
                    <Todo
                        key={item.id}
                        item={item}
                        handleClick={handleClick}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ul>
    )
}

export default TodoList