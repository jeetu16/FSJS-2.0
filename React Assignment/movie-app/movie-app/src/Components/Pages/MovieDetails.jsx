import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';


const MovieDetails = () => {

    const  movieName = useLocation()

    console.log(movieName);
    return (
        <div>
            <Outlet/>
            {/* {movi} */}
            hello world
        </div>
    )
}

export default MovieDetails