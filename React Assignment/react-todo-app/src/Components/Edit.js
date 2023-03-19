import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Edit = ({ item }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                value={item.title}
                // onChange={handleInputEdit}
            />
            <button type='submit'>
                <FaCheck />
            </button>
        </form>
    )
}

export default Edit