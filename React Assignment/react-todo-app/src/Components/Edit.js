import React, { useRef } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setUpdateItem, updateTodoList } from '../features/todoList/todoList';

const Edit = ({ item }) => {

    const focusRef = useRef(null);

    // react-redux
    const items = useSelector((state) => state.todosList.lists);
    const dispatch = useDispatch();

    const handleInputEdit = (value, num) => {
        const newTodoList = items.map((item) => item.id === num ? { ...item, checked: false, title: value } : item)
        dispatch(updateTodoList(newTodoList));
    }

    return (
        <form
            className='form-edit'
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(setUpdateItem(-1));
            }}>
            <input
                autoFocus
                type='text'
                value={item.title}
                onChange={(e) => {
                    handleInputEdit(e.target.value, item.id)
                }}
                ref={focusRef}
                required
            />
            <FaCheck
                role="button"
                tabIndex='0'
                onClick={(e) => {
                    focusRef.current.focus()
                    item.title.length && dispatch(setUpdateItem(-1));
                }}
            />
        </form>
    )
}
export default Edit