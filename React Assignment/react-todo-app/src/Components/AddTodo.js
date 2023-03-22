import React, { useState, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addInTodoList } from '../features/todoList/todoList';

const AddTodo = () => {

    // taking taking value from store using redux
    const items = useSelector((state) => state.todosList.lists);
    const dispatch = useDispatch();

    const [newItem, setNewItem] = useState('');
    const focusRefAdd = useRef(null);

    const addItem = async (title) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const newTodo = { id, checked: false, title };
        dispatch(addInTodoList(newTodo));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        focusRefAdd.current.focus();
        const arrStr = newItem.split("");
        const flag = arrStr.every((arr) => arr === " ");
        if (flag) return;
        addItem(newItem);
        setNewItem('');
    }


    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <input
                autoFocus
                type="text"
                id="add-todo"
                placeholder='Add Todo'
                required
                value={newItem}
                ref={focusRefAdd}
                onChange={(e) => setNewItem(e.target.value)}

            />
            <label htmlFor="add-todo">
                Add Items
            </label>
            <button
                className='add-btn'
                type='submit'
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddTodo