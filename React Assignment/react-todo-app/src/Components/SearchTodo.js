import React from 'react'

const SearchTodo = ({ searchItem, setSearchItem }) => {
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