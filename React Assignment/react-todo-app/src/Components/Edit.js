import React, { useRef, useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { MyContext } from '../App';

const Edit = ({ item }) => {

    const { items, setItems, setUpdateItem } = useContext(MyContext);
    const focusRef = useRef(null);


    const handleInputEdit = (value, num) => {
        const newTodoList = items.map((item) => item.id === num ? { ...item, checked: false, title: value } : item)
        setItems(newTodoList);
    }

    return (
        <form className='form-edit' onSubmit={(e) => {
            e.preventDefault();
            setUpdateItem(-1);
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
                    item.title && false && setUpdateItem(-1);

                }}
            />

        </form>
    )
}

export default Edit