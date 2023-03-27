import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getMoviesList } from '../../api/fetchAPI';
import MyDataContext from '../../Context/MyDataContext';
import MovieCard from '../../Sub_Components/MovieCard'

const TrendingMovies = ({ movieCollection }) => {

  const [pageNum, setPageNum] = useState(1);
  const [movieList, setMovieList] = useState(null);
  const [correct, setCorrect] = useState(true);


  let moviesListObj = null;
  if (movieCollection === "trending_movie") {
    const { trending_movie } = useContext(MyDataContext);
    moviesListObj = trending_movie;
  }
  else if (movieCollection === "top_rated_movie") {
    const { top_rated_movie } = useContext(MyDataContext);
    moviesListObj = top_rated_movie;
  }
  else if (movieCollection === "trending_tvShows") {
    const { trending_tvShows } = useContext(MyDataContext);
    moviesListObj = trending_tvShows;
  }
  else {
    const { top_rated_tvShows } = useContext(MyDataContext);
    moviesListObj = top_rated_tvShows;
  }

  useEffect(() => {
    const fetchData = () => {
      getMoviesList(moviesListObj.url, pageNum).then((data) => setMovieList(data));
      setCorrect(false);
    }
    fetchData();
  }, [pageNum]);

  console.log(movieList);
  return (
    <>
      {
        movieList
        &&
        <div className="flex-grow p-4">

          <h2 className='text-center text-3xl font-bold my-8 mb-16 underline decoration-indigo-700 decoration-4 underline-offset-8'>{moviesListObj.heading}</h2>



          <div className='grid grid-cols-2 gap-4 sm:grid-cols-5'>
            {movieList.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>


          <div className='flex justify-center gap-4 items-center mt-8 mb-4'>
            <Link
              // to={`/${movieList.id}/${pageNum}`}
              style={pageNum === 1 ? { cursor: "not-allowed", backgroundColor: "#b8bbf2", color: "#000" } : null}
              className='px-6 py-2 bg-indigo-600 hover:opacity-80 rounded-full text-white cursor-pointer'
              onClick={() => setPageNum(pageNum - 1)}
              disabled={pageNum === 1}
            >
              Prev
            </Link>
            <p className='text-xl font-medium '>{pageNum}</p>
            <Link
              // to={`/${movieList.id}/${pageNum}`}
              style={pageNum === Number(movieList.total_pages) ? { cursor: "not-allowed", backgroundColor: "#b8bbf2", color: "#000" } : null}
              className='px-6 py-2 bg-indigo-600 hover:opacity-80 rounded-full text-white cursor-pointer'
              onClick={() => setPageNum(pageNum + 1)}
              disabled={pageNum === Number(movieList.total_pages)}
            >
              Next
            </Link>
          </div>
        </div>
      }
    </>
  )
}

export default TrendingMovies