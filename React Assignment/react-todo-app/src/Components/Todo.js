import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { MyContext } from '../App';

const Todo = ({item}) => {

    const { items, setItems} = useContext(MyContext);

    const { setUpdateItem } = useContext(MyContext);


    const handleEdit = (id) => {
        setUpdateItem(id);
    }


    const handleClick = async (id) => {
        const listItemes = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItemes);
    }
    const handleDelete = async (id) => {
        const listItemes = items.filter((item) => item.id !== id)
        setItems(listItemes);
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
                onClick={() => handleEdit(item.id)}
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