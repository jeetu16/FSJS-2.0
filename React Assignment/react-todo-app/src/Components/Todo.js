import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Todo = ({ item, handleClick, handleDelete }) => {
    return (
        <li className='item' key={item.id}>
            <input
                onChange={() => handleClick(item.id)}
                type='checkbox'
                checked={item.checked}
            />
            <label
                style={(item.checked) ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleClick(item.id)}
            >
                {item.title}
            </label>
            <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default Todo