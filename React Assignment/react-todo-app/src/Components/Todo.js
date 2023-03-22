import React, { useContext } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { MyContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodoList,setUpdateItem } from '../features/todoList/todoList';

const Todo = ({item}) => {

    // Context API
    // const { updateItem, setUpdateItem } = useContext(MyContext);

    // Redux
    const items = useSelector((state) => state.todosList.lists);
    const updateItem = useSelector((state) => state.todosList.updateItem);
    const dispatch = useDispatch();


    const handleEdit = (id) => {
        dispatch(setUpdateItem(id));
    }


    const handleClick = async (id) => {
        const listItemes = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        dispatch(updateTodoList(listItemes));
    }
    const handleDelete = async (id) => {
        const listItemes = items.filter((item) => item.id !== id)
        dispatch(updateTodoList(listItemes));
    }

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
            <FaEdit
                role="button"
                tabIndex="1"
                onClick={() => updateItem === -1 && handleEdit(item.id)}
            />
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