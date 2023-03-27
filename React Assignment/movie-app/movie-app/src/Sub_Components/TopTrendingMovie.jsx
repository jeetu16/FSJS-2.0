import React, { useEffect, useState } from 'react'
import { getCategoriesMovies } from '../api/fetchAPI'

const TopTrendingMovie = ({ trendingMovie }) => {

    const [trendMovie,setTrendMovie] = useState({});
    useEffect( ()=> {
        getCategoriesMovies(trendingMovie.url).then(data => setTrendMovie(data.results[0]))
    })
  return (
      <div className='h-screen bg-no-repeat bg-center bg-contain' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/cCzCClIzIh81Fa79hpW5nXoUsHK.png)`}}>
    </div>
  )
}

export default TopTrendingMovie