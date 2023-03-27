
import Home from "./Components/Home"
import { DataProvider } from "./Context/MyDataContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TrendingMovies from "./Components/Pages/TrendingMovies";
import Layout from "./Layout/Layout";
import MovieDetails from "./Components/Pages/MovieDetails";
// import React, { useContext } from "react";
// import MyDataContext from "./Context/MyDataContext";


function App() {
  // const { top_rated_movie, trending_movie } = useContext(MyDataContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/trendingMovie/",
          element: <TrendingMovies movieCollection={"trending_movie"} />,
        },
        {
          path: "/topRatedMovie/",
          element: <TrendingMovies movieCollection={"top_rated_movie"} />
        },
        {
          path: "/trendingShow/",
          element: <TrendingMovies movieCollection={"trending_tvShows"} />
        },
        {
          path: "/topRatedShow/",
          element: <TrendingMovies movieCollection={"top_rated_tvShows"} />
        },
        {
          path: "/movieDetails",
          element: <MovieDetails />
        }
      ]
    }
    
  ])

  return (
    <DataProvider>
      <div className="flex h-full flex-col">
        <RouterProvider router={router} />
      </div>
    </DataProvider>
  )
}

export default App
