import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieList from './MovieList';
import { fetchTopRated } from '../api/api';
import { getMovieList } from '../features/movie/movieSlice';

export default function TopRate(props) {
    const { movies, errorMessage, loading } = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchTopRated()
            .then(data => {
                dispatch(getMovieList({
                    payload: data.results
                }));
            });
    }, [dispatch])

    return (
        <>
            {loading &&
                <div className='loading-movie'>Loading...</div>
            }
            {errorMessage &&
                <span>{errorMessage}</span>
            }
            {movies.length > 0 && (
                <div className="container">
                    <div className="grid">
                        {movies.map((movieReq) =>
                            <MovieList key={movieReq.id} {...movieReq} />
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
