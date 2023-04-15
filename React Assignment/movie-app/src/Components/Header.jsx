import React, { useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const focusOnSearch = useRef(null);
    const [searchMovie, setSearchMovie] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        focusOnSearch.current.focus();
        navigate(`/searchResult`, { state :searchMovie } )
        window.location.reload(true);
        setSearchMovie("");
    }

    return (
        <>
            <header className='bg-indigo-700 flex flex-col items-center p-2 text-white sm:flex-row sm:justify-between sticky top-0 z-10 px-6'>
                <div className='w-fittext-center py-2'>
                    <Link to="/" className='text-2xl font-bold font-mono sm:text-4xl tracking-wide'><span className="font-serif text-orange-500 ">M</span>ovie<span className='font-serif text-[papayawhip]'>B</span>uzz</Link>
                </div>
                <ul className='flex gap-5 text-lg font-semibold text-[papayawhip]'>
                    <li className='cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Home</li>
                    <li className='cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Trending Movies</li>
                    <li className='cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Top Rated Movies</li>
                    <li className='cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Trending Shows</li>
                    <li className='cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Top Rated Shows</li>           
                </ul>
                <form className='flex items-center justify-center mt-2 w-full px-2 text-xl text-black pb-1 sm:w-fit' onSubmit={(e) => handleSubmit(e)}>
                    <input
                        autoFocus
                        className='outline-none p-1 rounded'
                        type="text"
                        placeholder='Search Movies'
                        ref={focusOnSearch}
                        value={searchMovie}
                        onChange={(e) => setSearchMovie(e.target.value)}
                        required
                    />
                    <button
                        type='submit'
                        className='text-white ml-2 p-0.5'
                        onClick={(e) => searchMovie && handleSubmit(e)}
                    >
                        <FaSearch />
                    </button>
                </form>
            </header>
        </>
    )
}

export default Header