import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {


  const posterPath = "https://image.tmdb.org/t/p/w500/";
  return (
    <Link
      to="/movieDetails" state={{movieName:movie.title || movie.name}}
      className=' cursor-pointer hover:opacity-90'
    >
      <div className='rounded-md w-full shadow shadow-black h-72 sm:h-96'>
        <img className='w-full rounded-md h-full' src={`${posterPath}${movie.poster_path}`} alt="poster" />
      </div>

      {
        movie.title !== undefined ?
          <p className="bottom-1 p-2 font-medium text-indigo-700 text-lg">
            {movie.title} ({movie.release_date.slice(0, 4)})
          </p>
          :
          <p className="bottom-1 p-2 font-medium text-indigo-700 text-lg">
            {movie.name}
          </p>
      }
    </Link>
  )
}

export default MovieCard