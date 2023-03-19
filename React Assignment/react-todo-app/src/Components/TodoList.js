import React from 'react';
import Todo from './Todo';
import Edit from './Edit';


const TodoList = ({ items, handleClick, handleDelete, handleEdit, updateItem, setUpdateItem }) => {
    return (
        <ul>
            {
                items.map((item) => (
                    updateItem === item.id ?
                        <Edit
                            key={(item.id)}
                            item={item}
                        />
                        :
                        <Todo
                            key={item.id}
                            item={item}
                            handleClick={handleClick}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                ))
            }
        </ul>
    )
}

export default TodoList