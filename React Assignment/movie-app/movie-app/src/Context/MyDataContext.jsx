import React,{ createContext } from "react";

const MyDataContext = createContext({});

export const DataProvider = ({children}) => {

    const trending_movie = {
        url: "trending/movie/day",
        heading: "Trending Movies",
        id:"trendingMovie"
    }

    const top_rated_movie = {
        url: "movie/top_rated",
        heading : "Top Rated Movies",
        id:"topRatedMovie"
    }

    const trending_tvShows = {
        url: "trending/tv/day",
        heading : "Trending TV Shows",
        id:"trendingShow"
    }

    const top_rated_tvShows = {
        url: "tv/top_rated",
        heading: "Top Rated TV Shows",
        id:"topRatedShow"
    }

    return (
        <MyDataContext.Provider value={{ trending_movie, top_rated_movie, trending_tvShows, top_rated_tvShows }}>
            {children}
        </MyDataContext.Provider>
    )
}

export default MyDataContext;
