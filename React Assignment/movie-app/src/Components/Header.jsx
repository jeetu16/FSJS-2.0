import React, { useRef, useState } from 'react';
import { FaSearch, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Header = () => {

    const navigate = useNavigate();

    const focusOnSearch = useRef(null);
    const [searchMovie, setSearchMovie] = useState("");
    const [searchBtnToggle, setSearchBtnToggle] = useState(false);
    const [menuBarBtnToggle, setMenuBarBtnToggle] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        focusOnSearch.current.focus();
        navigate(`/searchResult`, { state: searchMovie })
        window.location.reload(true);
        setSearchMovie("");
    }

    const handleSearchBtn = (e) => {
        setSearchBtnToggle(!searchBtnToggle);
        setMenuBarBtnToggle(false);
    }
    const handleMenuBar = () => {
        setMenuBarBtnToggle(!menuBarBtnToggle);
        setSearchBtnToggle(false);
    }

    return (
        <div>
            <header className={`bg-indigo-700 flex flex-row items-center p-2 text-white xl:flex-row xl:justify-between sticky top-0 z-10 px-6 justify-between ${searchBtnToggle ? 'mb-[7vh] duration-500' : 'mb-0 duration-500'}`}>
                <button className='border px-2 py-1 xl:hidden' onClick={handleMenuBar}>
                    {
                        menuBarBtnToggle
                            ?
                            <IoClose className='cursor-pointer text-2xl duration-500' />
                            :
                            <GiHamburgerMenu className='cursor-pointer text-2xl duration-500' />
                    }
                </button>
                <div className='w-fittext-center py-2'>
                    <Link to="/" className='text-2xl font-bold font-mono md:text-3xl xl:text-4xl tracking-wide'><span className="font-serif text-orange-500 ">M</span>ovie<span className='font-serif text-[papayawhip]'>B</span>uzz</Link>
                </div>
                <ul className={`absolute w-full bg-indigo-700 left-0 xl:w-auto text-center top-16 xl:bg-indigo-700 xl:static gap-5 text-lg font-semibold xl:flex py-6 xl:py-2 text-white ${menuBarBtnToggle ? 'top-16 duration-500' : 'top-[-20rem] duration-500'}`}>
                    <Link to="/" onClick={() => setMenuBarBtnToggle(false)}>
                        <li className='border-t-2 hover:bg-white hover:text-indigo-700 xl:hover:bg-indigo-700 xl:hover:text-white py-2 xl:border-none xl:py-0 cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Home</li>
                    </Link>
                    <Link to="/trendingMovie/1" onClick={() => setMenuBarBtnToggle(false)}>
                        <li className='border-t-2 hover:bg-white hover:text-indigo-700 xl:hover:bg-indigo-700 xl:hover:text-white py-2 xl:border-none xl:py-0 cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Trending Movies</li>
                    </Link>
                    <Link to="/topRatedMovie/1" onClick={() => setMenuBarBtnToggle(false)}>
                        <li className='border-t-2 hover:bg-white hover:text-indigo-700 xl:hover:bg-indigo-700 xl:hover:text-white py-2 xl:border-none xl:py-0 cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Top Rated Movies</li>
                    </Link>
                    <Link to="/trendingShow/1" onClick={() => setMenuBarBtnToggle(false)}>
                        <li className='border-t-2 hover:bg-white hover:text-indigo-700 xl:hover:bg-indigo-700 xl:hover:text-white py-2 xl:border-none xl:py-0 cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Trending Shows</li>
                    </Link >
                    <Link to="/topRatedShow/1" onClick={() => setMenuBarBtnToggle(false)}>
                        <li className='border-t-2 hover:bg-white hover:text-indigo-700 xl:hover:bg-indigo-700 xl:hover:text-white py-2 border-b-2 xl:border-none xl:py-0 cursor-pointer hover:opacity-80 duration-300 hover:scale-x-110'>Top Rated Shows</li>
                    </Link >
                </ul>
                <form className={`flex text-center items-center xl:justify-center mt-2 w-full px-2 text-xl text-black p-4 xl:p-2 xl:w-fit absolute xl:static bg-indigo-700 xl:border-none xl:bg-indigo-700 left-0 z-10 ${searchBtnToggle ? 'top-[7vh] duration-500' : "top-[-20vh] duration-500"}`} onSubmit={(e) => handleSubmit(e)}>
                    <input
                        autoFocus
                        className='outline-none p-1 rounded flex-grow'
                        type="text"
                        placeholder='Search Movies'
                        ref={focusOnSearch}
                        value={searchMovie}
                        onChange={(e) => setSearchMovie(e.target.value)}
                        required
                    />
                    <button
                        type='submit'
                        className={`text-white ml-2 p-0.5`}
                        onClick={(e) => searchMovie && handleSubmit(e)}
                    >
                        {
                            window.innerWidth > 1280
                                ?
                                <FaSearch />
                                :
                                "Search"
                        }
                    </button>
                </form>
                <button className='xl:hidden border  py-1 px-2' onClick={handleSearchBtn}>
                    <FaSearch className='text-2xl' />
                </button>
            </header >
        </div>
    )
}

export default Header