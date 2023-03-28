import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import MyDataContext from '../Context/MyDataContext';
import CategoriesMoviesShows from './Categories/CategoriesMoviesShows';
const Main = () => {

  const { top_rated_movie, trending_movie, top_rated_tvShows, trending_tvShows } = useContext(MyDataContext);

  return (
    <main className='flex-grow p-4'>
      <Outlet />
      <CategoriesMoviesShows movieCategory={trending_movie} />
      <CategoriesMoviesShows movieCategory={top_rated_movie} />
      <CategoriesMoviesShows movieCategory={trending_tvShows} />
      <CategoriesMoviesShows movieCategory={top_rated_tvShows} />
    </main>
  )
}

export default Main