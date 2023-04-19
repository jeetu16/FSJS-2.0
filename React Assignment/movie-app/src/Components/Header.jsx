import React, { useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {

    const navigate = useNavigate();

    const focusOnSearch = useRef(null);
    const [searchMovie, setSearchMovie] = useState("");
    const [searchBtnToggle, setSearchBtnToggle] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        focusOnSearch.current.focus();
        navigate(`/searchResult`, { state: searchMovie })
        window.location.reload(true);
        setSearchMovie("");
    }

    const handleSearchBtn = (e) => {
        setSearchBtnToggle(!searchBtnToggle);
        alert("Hello");
    }

    return (
        <>
            <header className='bg-indigo-700 flex flex-row items-center p-2 text-white sm:flex-row sm:justify-between sticky top-0 z-10 px-6 justify-between'>
                <button className='border px-2 py-1 sm:hidden' onClick={() => alert("hello")}>
                    <GiHamburgerMenu className='cursor-pointer text-2xl' />
                </button>
                <div className='w-fittext-center py-2'>
                    <Link to="/" className='text-2xl font-bold font-mono sm:text-4xl tracking-wide'><span className="font-serif text-orange-500 ">M</span>ovie<span className='font-serif text-[papayawhip]'>B</span>uzz</Link>
                </div>
                <ul className='absolute top-20 hidden text-black sm:static gap-5 text-lg font-semibold sm:text-[papayawhip] sm:flex'>
                    <li className='cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Home</li>
                    <li className='cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Trending Movies</li>
                    <li className='cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Top Rated Movies</li>
                    <li className='cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Trending Shows</li>
                    <li className='cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Top Rated Shows</li>
                </ul>
                <form className='sm:flex items-center sm:justify-center mt-2 w-full px-2 text-xl text-black p-4 sm:p-2 sm:w-fit absolute sm:static top-[7vh] bg-indigo-700 border sm:border-none sm:bg-indigo-700 left-0 z-10 flex justify-around' onSubmit={(e) => handleSubmit(e)}>
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
                        className={`text-white ml-2 p-0.5 ${searchBtnToggle}`}
                        onClick={(e) => searchMovie && handleSubmit(e)}
                    >
                        {
                            searchBtnToggle
                            ? 
                            <FaSearch />
                            :
                            "Search"
                        }
                    </button>
                </form>
                <button className='sm:hidden border  py-1 px-2' onClick={handleSearchBtn}>
                    <FaSearch className='text-2xl' />
                </button>
            </header>
        </>
    )
}

export default Header