import React from 'react';
import Todo from './Todo';
import Edit from './Edit';
import { useSelector } from 'react-redux';



const TodoList = ({ items }) => {

    // react-redux
    const updateItem = useSelector((state) => state.todosList.updateItem);

    return (
        <ul>
            {
                items.map((item) => (
                    updateItem === item.id ?
                        <Edit key={(item.id)} item={item} />
                        :
                        <Todo key={item.id} item={item} />
                ))
            }
        </ul>
    )
}
export default TodoList