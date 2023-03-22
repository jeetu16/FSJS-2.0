import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchItem } from '../features/todoList/todoList';

const SearchTodo = () => {

    const dispatch = useDispatch();
    const searchItem = useSelector((state) => state.todosList.searchItem);
    
    return (
        <form className='add-form' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search-box">Search</label>
            <input
                id='search-box'
                type="text"
                placeholder='Search Your Todo'
                value={searchItem}
                onChange={(e) => dispatch(setSearchItem(e.target.value))}
            />
        </form>
    )
}

export default SearchTodo