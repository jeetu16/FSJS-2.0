import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {


  const posterPath = "https://image.tmdb.org/t/p/w500/";
  return (
    <Link
      to="/movieDetails" state={{movieName:movie.title || movie.name || movie.Title}}
      className=' cursor-pointer hover:opacity-90 hover:scale-105 transition-all'
    >
      <div className='rounded-md w-full shadow shadow-black h-72 sm:h-96'>
        <img className='w-full rounded-md h-full' src={movie.Poster===undefined ? `${posterPath}${movie.poster_path}` : movie.Poster } alt="poster" />
      </div>

      {
        movie.Title === undefined ? (
        movie.title !== undefined ?
            <p className="bottom-1 p-2 font-medium text-indigo-700 text-lg sm:text-xl">
            {movie.title} ({movie.release_date.slice(0, 4)})
          </p>
          :
          <p className="bottom-1 p-2 font-medium text-indigo-700 text-lg sm:text-xl">
            {movie.name}
          </p>) : 
          <p className="bottom-1 p-2 font-medium text-indigo-700 text-lg">{movie.Title}({movie.Year})</p>
      }
    </Link>
  )
}

export default MovieCard