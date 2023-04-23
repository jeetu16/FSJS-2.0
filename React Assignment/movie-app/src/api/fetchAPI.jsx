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

export const getSearchMovies = async (search,page=1) => {
    const response = await axiosBaseOMDB.get(`?s=${search}&apikey=${API_Key_OMDB}&page=${page}`);
    return response.data;
}

export const getSimilarMovies = async (title,id) => {
    const response = await axiosBase.get(`${title}/${id}/similar?api_key=${API_Key}&page=1`);
    return response.data;
}  

