import axios from "axios";

const API_Key = "184792dceb0eb96a0680ddff7329c877";
const API_Key_OMDB = "20147ab1";

const axiosBase = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

const axiosBaseOMDB = axios.create({
    baseURL: "https://www.omdbapi.com/"
})

export const getMoviesList = async (categoryURL,page=1) => {
    const response = await axiosBase.get(`${categoryURL}?api_key=${API_Key}&page=${page}`);
    return response.data;
}

export const getMovieDetails = async (title) => {
    const response = await axiosBaseOMDB.get(`?t=${title}&apikey=${API_Key_OMDB}`);
    return response.data;
}


//https://www.omdbapi.com/?t=avengers&apikey=20147ab1

// t=avengers&apikey=20147ab1

//  url: "trending/tv/day",
//  url: "tv/top_rated",

// export const getMovieDetails = async (categoryURL) => {
//     const response = await axiosBase.get()
// }

// https://api.themoviedb.org/3/movie/top_rated?api_key=184792dceb0eb96a0680ddff7329c877&language=en-US&page=1

// trending/movie/day - trending

// movie/top_rated - top-rated