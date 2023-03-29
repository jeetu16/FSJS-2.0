import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getSearchMovies } from '../../api/fetchAPI';
import MovieCard from '../../Sub_Components/MovieCard';

const SearchResult = () => {

  const location = useLocation();
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState(location.state);
  const [correct, setCorrect] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    const fetchSearchResult = async () => {
      await getSearchMovies(searchTitle, pageNum).then((data) => setSearchMovies(data));
      setCorrect(false);
    }
    fetchSearchResult();
  }, [pageNum])

  console.log(searchMovies)

  return (
    <div className='flex flex-grow place-content-center flex-col'>

      {
        correct
        &&
        <div className="flex items-center justify-center place-content-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span
            >
          </div>
        </div>
      }

      {
        !correct
          &&
          searchMovies.Search !== undefined
          &&
          searchMovies.Response === 'True'
          ?
          <>
            <h2 className='text-center text-2xl font-bold my-8'>Showing results for: <span className=' font-medium text-indigo-700 '> {searchTitle}</span></h2>
            <div className='grid place-content-center grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:gap-8 text-center'>
              {searchMovies.Search.map((item) => <MovieCard key={item.imdbID} movie={item} />)}
            </div>
            {
              searchMovies.totalResults > 11 &&
              <div className='flex justify-center gap-4 items-center mt-8 mb-4'>
                <button
                  // to={`/${movieList.id}/${pageNum}`}
                  style={pageNum === 1 ? { cursor: "not-allowed", backgroundColor: "#b8bbf2", color: "#000" } : null}
                  className='px-6 py-2 bg-indigo-600 hover:opacity-80 rounded-full text-white cursor-pointer'
                  onClick={() => setPageNum(pageNum - 1)}
                  disabled={pageNum === 1}
                >
                  Prev
                </button>
                <p className='text-xl font-medium '>{pageNum}</p>
                <button
                  // to={`/${movieList.id}/${pageNum}`}
                  style={pageNum === Number(searchMovies.totalResults) ? { cursor: "not-allowed", backgroundColor: "#b8bbf2", color: "#000" } : null}
                  className='px-6 py-2 bg-indigo-600 hover:opacity-80 rounded-full text-white cursor-pointer'
                  onClick={() => setPageNum(pageNum + 1)}
                  disabled={pageNum === Number(searchMovies.totalResults)}
                >
                  Next
                </button>
              </div>
            }
          </>
          :
          <>
            {
              searchMovies.Response === 'False'
              &&
              <div className='grid place-content-center text-red-600 text-2xl font-bold'> Not Found: {searchTitle} </div>
            }
          </>
      }

    </div>
  )
}

export default SearchResult