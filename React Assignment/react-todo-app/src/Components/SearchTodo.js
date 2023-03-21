import React, { useContext } from 'react';
import { MyContext } from '../App';

const SearchTodo = () => {

    const {searchItem, setSearchItem} = useContext(MyContext);

    return (
        <form className='add-form' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search-box">Search</label>
            <input
                id='search-box'
                type="text"
                placeholder='Search Your Todo'
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
        </form>
    )
}

export default SearchTodo