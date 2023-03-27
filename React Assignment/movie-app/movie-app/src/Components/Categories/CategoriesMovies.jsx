import React, { useState, useEffect } from 'react';
import ButtonSeeMore from '../../Sub_Components/ButtonSeeMore';
import { getCategoriesMovies } from '../../api/fetchAPI';
import MovieCard from '../../Sub_Components/MovieCard';

const CategoriesMovies = ({ movieCategory }) => {

    const [categoriesMovies, setCategoriesMovies] = useState([]);
    const [correct, setCorrect] = useState(false);


    const handleMoreButton = () => {
        console.log(categoriesMovies);
    }

    useEffect(() => {
        getCategoriesMovies(movieCategory.url).then(data => setCategoriesMovies(data.results));
        setCorrect(true);
    }, [])

    return (
        <div className='my-16'>
            {!correct && <p>Loading</p>}
            <div>
                <div className='flex justify-between items-center p-2 mb-8 sm:justify-between sm:mb-14'>
                    <h2 className='text-xl font-bold font-mono sm:text-4xl underline decoration-indigo-700 decoration-4 underline-offset-8'>
                        {movieCategory.heading}
                    </h2>
                    <ButtonSeeMore value={"See More"} movieCategory={movieCategory} />
                </div>
                <div className='grid grid-cols-2 gap-4 sm:grid-cols-5'>
                    {correct && categoriesMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>
        </div>
    )
}

export default CategoriesMovies