import React, { useEffect, useState } from 'react'
import { getMoviesList } from '../../api/fetchAPI'

const TopTrendingMovie = ({ trendingMovie }) => {

    const [trendMovie,setTrendMovie] = useState({});
    useEffect( ()=> {
        getMoviesList(trendingMovie.url).then(data => setTrendMovie(data.results[0]))
    })
  return (
    <div className='h-screen bg-no-repeat bg-center bg-contain' style={{ backgroundImage: `https://image.tmdb.org/t/p/w500${trendMovie.poster_path}`}}>
    </div>
  )
}

export default TopTrendingMovie