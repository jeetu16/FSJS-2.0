import React, { useState, useEffect } from 'react';
import ButtonSeeMore from '../Sub_Components/ButtonSeeMore';
import { getMoviesList } from '../../api/fetchAPI';
import MovieCard from '../Sub_Components/MovieCard';

const CategoriesMovies = ({ movieCategory }) => {

    const [categoriesMovies, setCategoriesMovies] = useState(null);
    const [correct, setCorrect] = useState(true);

    useEffect(() => {
        getMoviesList(movieCategory.url).then(data => setCategoriesMovies(data.results));
        setCorrect(false);
    }, [])

    return (
        <div className='my-16'>
            {
                correct
                &&
                <div className="flex items-center justify-center place-content-center">
                    <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span
                        >
                    </div>
                </div>

            }

            {
                categoriesMovies
                &&
                <div>
                    <div className='flex justify-between items-center p-2 mb-8 sm:justify-between sm:mb-14'>
                        <h2 className='text-xl font-bold font-mono sm:text-4xl underline decoration-indigo-700 decoration-4 underline-offset-8'>
                            {movieCategory.heading}
                        </h2>
                        <ButtonSeeMore value={"See More"} movieCategory={movieCategory} />
                    </div>
                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 sm:px-4 sm:gap-8'>
                        {categoriesMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                    </div>
                </div>
            }
        </div>
    )
}

export default CategoriesMovies