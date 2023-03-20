import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Edit = ({
    item,
    updateItem,
    setUpdateItem,
    handleInputEdit,
    focusRef
}) => {
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
                    item.title && setUpdateItem(-1);
                    
                }}
            />

        </form>
    )
}

export default Edit