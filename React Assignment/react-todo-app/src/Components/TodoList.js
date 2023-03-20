import React from 'react';
import Todo from './Todo';
import Edit from './Edit';


const TodoList = ({
    items,
    handleClick,
    handleDelete,
    handleEdit,
    updateItem,
    setUpdateItem,
    handleInputEdit,
    focusRef
}) => {
    return (
        <ul>
            {
                items.map((item) => (
                    updateItem === item.id ?
                        <Edit
                            key={(item.id)}
                            item={item}
                            updateItem={updateItem}
                            setUpdateItem={setUpdateItem}
                            handleInputEdit={handleInputEdit}
                            focusRef={focusRef}
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