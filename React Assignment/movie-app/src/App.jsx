
import Home from "./Components/Home"
import { DataProvider } from "./Context/MyDataContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TrendingMovies from "./Components/Pages/TrendingMovies";
import Layout from "./Layout/Layout";
import MovieDetails from "./Components/Pages/MovieDetails";
import SearchResult from "./Components/Pages/SearchResult";


function App() {
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
          path: "/trendingMovie/:id",
          element: <TrendingMovies movieCollection={"trending_movie"} />,
        },
        {
          path: "/topRatedMovie/:id",
          element: <TrendingMovies movieCollection={"top_rated_movie"} />
        },
        {
          path: "/trendingShow/:id",
          element: <TrendingMovies movieCollection={"trending_tvShows"} />
        },
        {
          path: "/topRatedShow/:id",
          element: <TrendingMovies movieCollection={"top_rated_tvShows"} />
        },
        {
          path: "/movieDetails",
          element: <MovieDetails />
        },
        {
          path: "/searchResult",
          element: <SearchResult />
        }
      ]
    }

  ])

  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  )
}

export default App
