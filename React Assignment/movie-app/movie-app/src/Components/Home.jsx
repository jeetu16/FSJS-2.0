import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import MyDataContext from '../Context/MyDataContext';
import CategoriesMovies from './Categories/CategoriesMovies';
import CategoriesTvShows from './Categories/CategoriesTvShows';
const Main = () => {

  const { top_rated_movie, trending_movie, top_rated_tvShows, trending_tvShows } = useContext(MyDataContext);

  return (
    <main className='flex-grow p-4'>
      <Outlet />
      <CategoriesMovies movieCategory={trending_movie} />
      <CategoriesMovies movieCategory={top_rated_movie} />
      <CategoriesMovies movieCategory={trending_tvShows} />
      <CategoriesMovies movieCategory={top_rated_tvShows} />
    </main>
  )
}

export default Main