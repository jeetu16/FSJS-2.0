import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddTodo = ({ handleSubmit, newItem, setNewItem, focusRef }) => {
    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <input
                autoFocus
                type="text"
                id="add-todo"
                placeholder='Add Todo'
                required
                value={newItem}
                ref = { focusRef }
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