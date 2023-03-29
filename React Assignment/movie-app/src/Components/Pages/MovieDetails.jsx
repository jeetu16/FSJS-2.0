import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../api/fetchAPI';


const MovieDetails = () => {

    const location = useLocation();
    const [movieDetail, setMovieDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovieData = () => {
            getMovieDetails(String(location.state.movieName)).then((data) => setMovieDetail(data));
            setIsLoading(false);
        }
        fetchMovieData();
    }, [])

    return (
        <>
            {isLoading && <p>Loading</p>}
            {
                movieDetail
                && !
                isLoading
                &&
                <>
                    {
                        movieDetail.Response !== "False" ?
                            <>
                                <div className='my-6 flex-grow sm:grid sm:place-content-center sm:mb-12'>
                                    <h2 className='text-center text-[1.75rem] font-bold my-4 decoration-indigo-700 sm:text-[2rem] sm:my-8 underline underline-offset-8 sm:mb-14'>{movieDetail.Title}{movieDetail.Released !== "N/A" ? <span>({movieDetail.Released.slice(movieDetail.Released.length - 4)})</span> : null}</h2>
                                    <div className='sm:grid sm:grid-cols-2 sm:place-content-center '>
                                        <div className='w-[85%] mx-auto rounded-md h-[26rem] sm:h-[32rem] sm:w-[70%] shadow-md shadow-slate-800'>
                                            <img className='w-full h-full rounded-md' src={movieDetail.Poster} alt="" />
                                        </div>
                                        <div className='px-6 mt-8 text-xl'>
                                            <p className='my-2'>
                                                <span className='font-bold'>IMDB Ratings</span> : {movieDetail.imdbRating !== "N/A" ? <span>{movieDetail.imdbRating}/10</span> : "N/A"}
                                            </p>
                                            <p className='my-2'>
                                                <span className='font-bold'>Type</span> : {movieDetail.Type !== "N/A" ? <span>{movieDetail.Type.charAt(0).toUpperCase() + movieDetail.Type.slice(1)}</span> : "N/A"}
                                            </p>
                                            <p className='my-2'>
                                                <span className='font-bold'>Director</span> : {movieDetail.Director}
                                            </p>
                                            <p className='my-2'>
                                                <span className='font-bold'>Released</span> : {movieDetail.Released}
                                            </p>
                                            {
                                                movieDetail.totalSeasons !== undefined
                                                    ?
                                                    <p className='my-2'>
                                                        <span className='font-bold'>Total Seasons</span> : {movieDetail.totalSeasons}
                                                    </p>
                                                    :
                                                    null
                                            }
                                            <p className='my-2'>
                                                <span className='font-bold'>Genre</span> : {movieDetail.Genre !== undefined ? movieDetail.Genre : "N/A"}
                                            </p>
                                            <p className='my-2'>
                                                <span className='font-bold'>Original Language</span> : {movieDetail.Language !== undefined ? movieDetail.Language : "N/A"}
                                            </p>
                                            <p className='my-2'>
                                                <span className='font-bold'>Actors</span> : {movieDetail.Actors !== undefined ? movieDetail.Actors : "N/A"}
                                            </p>
                                            <p className='my-2'>
                                                <span className='font-bold'>Runtime</span> : {movieDetail.Runtime !== undefined ? movieDetail.Runtime : "N/A"}
                                            </p>
                                            <p className='my-4 leading-8'>
                                                <span className='font-bold text-center mr-2'>Plot:</span>{movieDetail.Plot}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                {/* <div className='pb-4'>
                                    <h2 className='text-2xl text-center font-bold text-black underline underline-offset-8 decoration-4 decoration-indigo-700'>Similar {movieDetail.Type==="series" ? "Shows" : "Movies"}</h2>
                                </div> */}
                            </>
                            :
                            <div className='text-red-500 text-2xl text-center flex-grow grid place-content-center'>Movie Details Not Found</div>
                    }
                </>
            }
        </>
    )
}

export default MovieDetails