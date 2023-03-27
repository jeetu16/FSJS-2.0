import axios from "axios";

const API_Key = "184792dceb0eb96a0680ddff7329c877";

const axiosBase = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export const getTrending = async () => {
    const response = await axiosBase.get(`/trending/movie/day?api_key=${API_Key}`)
    return response.data;
}

export const getTopRated = async () => {
    const response = await axiosBase.get(`/movie/top_rated?api_key=${API_Key}`)
    return response.data;
}

export const getCategoriesMovies = async (categoryURL) => {
    const response = await axiosBase.get(`${categoryURL}?api_key=${API_Key}`)
    return response.data;
}

export const getMoviesList = async (categoryURL,page) => {
    const response = await axiosBase.get(`${categoryURL}?api_key=${API_Key}&page=${page}`);
    return response.data;
}



//  url: "trending/tv/day",
//  url: "tv/top_rated",


// export const getMovieDetails = async (categoryURL) => {
//     const response = await axiosBase.get()
// }

// https://api.themoviedb.org/3/movie/top_rated?api_key=184792dceb0eb96a0680ddff7329c877&language=en-US&page=1

// trending/movie/day - trending

// movie/top_rated - top-rated